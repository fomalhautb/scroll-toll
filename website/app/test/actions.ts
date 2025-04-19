'use server'

import { stackServerApp } from '@/stack'

export async function createTestUser() {
  try {
    const user = await stackServerApp.createUser({
      primaryEmail: 'test@email.com',
      displayName: 'name',
      password: "password123",
      primaryEmailAuthEnabled: true,
    });

    await user.update({
      clientReadOnlyMetadata: {
        role: 'example',
        onboarded: true,
        approved: true,
      },
    });
    console.log('Test user created successfully');
    return { success: true, message: 'Test user created successfully' };
  } catch (error) {
    console.error('Error creating test user:', error);
    return { success: false, message: 'Failed to create test user' };
  }
} 