#include<stdio.h>
#define MAX 100
int merge(int arr[],int n)
{
    int m,B[MAX];
    printf("enter the number elements in second array\n ");
    scanf("%d",&m);
    if(n+m> MAX)
{
    printf("merge not possible ! Array size will exceed\n");
    return n;
}
pritnf("Enter %d elements to second array\n",m);
for(i=0;i<m;i++)
{
    scanf("%d",&B[i]);
}
for(i=0;i<m;i++)
{
    arr[n+1]=B[i];
}
n=n+m;
printf("arrays are merged successfully\n");
return n;

}

int main()
{
    int arr
}
