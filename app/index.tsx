import { Redirect } from 'expo-router';
import { useAuth } from '@/store/auth';

export default function Index() {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/(auth)/login" />
  );
}