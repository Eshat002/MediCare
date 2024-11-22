from django.contrib.auth.forms import UserCreationForm
from account.models import UserAccount


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = UserAccount
        fields = ("email", "first_name", "last_name", "password1", "password2")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields["password1"].widget.attrs.update(
            {
                "class": "border bg-white font-medium min-w-20 rounded-md shadow-sm text-font-default-light text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-font-default-dark dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full max-w-2xl"
            }
        )
        self.fields["password2"].widget.attrs.update(
            {
                "class": "border bg-white font-medium min-w-20 rounded-md shadow-sm text-font-default-light text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-font-default-dark dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full max-w-2xl"
            }
        )

        self.fields["password1"].label = f"Create Password"
        self.fields["password2"].label = "Confirm Password"
