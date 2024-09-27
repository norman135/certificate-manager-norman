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
                suppliers = suppliers.Where(supplier => supplier.Name.Contains(searchParameters.Name));
            }
            if (searchParameters.Index != null)
            {
                suppliers = suppliers.Where(supplier => supplier.Index == searchParameters.Index);
            }

            if (!string.IsNullOrEmpty(searchParameters.City))
            {
                suppliers = suppliers.Where(supplier => supplier.City.Contains(searchParameters.City));
            }

            return suppliers;
        }

        public static IQueryable<User> FilterUser(IQueryable<User> users, UserSearchParameters searchParameters)
        {
            if (!string.IsNullOrEmpty(searchParameters.Name))
            {
                users = users.Where(user => user.Name.Contains(searchParameters.Name));
            }

            if (!string.IsNullOrEmpty(searchParameters.FirstName))
            {
                users = users.Where(user => user.FirstName.Contains(searchParameters.FirstName));
            }

            if (!string.IsNullOrEmpty(searchParameters.UserId))
            {
                users = users.Where(user => user.UserId.Contains(searchParameters.UserId));
            }

            if (!string.IsNullOrEmpty(searchParameters.Department))
            {
                users = users.Where(user => user.Department.Contains(searchParameters.Department));
            }

            if (!string.IsNullOrEmpty(searchParameters.Plant))
            {
                users = users.Where(user => user.Plant.Contains(searchParameters.Plant));
            }

            return users;
        }
    }
}
