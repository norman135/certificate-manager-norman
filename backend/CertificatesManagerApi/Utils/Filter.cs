using CertificatesManagerApi.Entities;
using CertificatesManagerApi.SearchParameters;

namespace CertificatesManagerApi.Utils
{
    public class Filter
    {
        public static IQueryable<Supplier> FilterSupplier(IQueryable<Supplier> suppliers, SupplierSearchParameters searchParameters)
        {
            if (!string.IsNullOrEmpty(searchParameters.Name))
            {
                suppliers = suppliers.Where(supplier => supplier
                .Name
                .ToLower()
                .Contains(searchParameters.Name.ToLower()));
            }
            if (searchParameters.Index != null)
            {
                suppliers = suppliers.Where(supplier => supplier.Index == searchParameters.Index);
            }

            if (!string.IsNullOrEmpty(searchParameters.City))
            {
                suppliers = suppliers.Where(supplier => supplier
                .City
                .ToLower()
                .Contains(searchParameters.City.ToLower()));
            }

            return suppliers;
        }

        public static IQueryable<User> FilterUser(IQueryable<User> users, UserSearchParameters searchParameters)
        {
            if (!string.IsNullOrEmpty(searchParameters.Name))
            {
                users = users.Where(user => user.Name.ToLower().Contains(searchParameters.Name.ToLower()));
            }

            if (!string.IsNullOrEmpty(searchParameters.FirstName))
            {
                users = users.Where(user => user.FirstName.ToLower().Contains(searchParameters.FirstName.ToLower()));
            }

            if (!string.IsNullOrEmpty(searchParameters.UserId))
            {
                users = users.Where(user => user.UserId.ToLower().Contains(searchParameters.UserId.ToLower()));
            }

            if (!string.IsNullOrEmpty(searchParameters.Department))
            {
                users = users.Where(user => user.Department.ToLower().Contains(searchParameters.Department.ToLower()));
            }

            if (!string.IsNullOrEmpty(searchParameters.Plant))
            {
                users = users.Where(user => user.Plant.ToLower().Contains(searchParameters.Plant.ToLower()));
            }

            return users;
        }
    }
}
