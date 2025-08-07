<?php

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserTest extends TestCase
{
    private ValidatorInterface $validator;

    protected function setUp(): void
    {
        $this->validator = Validation::createValidatorBuilder()
            ->enableAttributeMapping()
            ->getValidator();
    }

    public function testUserCreation(): void
    {
        $user = new User();
        $user->setUsername('testuser')
            ->setEmail('test@example.com')
            ->setPassword('Password123!')
            ->setStates('Nouvelle-Aquitaine');

        $this->assertEquals('testuser', $user->getUsername());
        $this->assertEquals('test@example.com', $user->getEmail());
        $this->assertEquals('Password123!', $user->getPassword());
        $this->assertEquals('Nouvelle-Aquitaine', $user->getStates());
        $this->assertEquals(['ROLE_PLAYER'], $user->getRoles());
    }

    public function testUsernameIsRequired(): void
    {
        $user = new User();
        $user->setEmail('test@example.com')
            ->setPassword('Password123!')
            ->setStates('Texas');

        $violations = $this->validator->validate($user);
        $this->assertGreaterThan(0, count($violations));

        $foundUsernameViolation = false;
        foreach ($violations as $violation) {
            if ($violation->getPropertyPath() === 'username') {
                $foundUsernameViolation = true;
                break;
            }
        }

        $this->assertTrue($foundUsernameViolation, 'No validation error for missing username');
    }

    public function testEmailIsRequired(): void
    {
        $user = new User();
        $user->setUsername('testuser')
            ->setPassword('Password123!')
            ->setStates('Alabama');

        $violations = $this->validator->validate($user);
        $this->assertGreaterThan(0, count($violations));

        $foundEmailViolation = false;
        foreach ($violations as $violation) {
            if ($violation->getPropertyPath() === 'email') {
                $foundEmailViolation = true;
                break;
            }
        }

        $this->assertTrue($foundEmailViolation, 'No validation error for missing email');
    }

    public function testEmailFormatValidation(): void
    {
        $user = new User();
        $user->setUsername('testuser')
            ->setEmail('invalid-email')
            ->setPassword('Password123!')
            ->setStates('Normandie');

        $violations = $this->validator->validate($user);
        $this->assertGreaterThan(0, count($violations));

        $foundEmailFormatViolation = false;
        foreach ($violations as $violation) {
            if ($violation->getPropertyPath() === 'email') {
                $foundEmailFormatViolation = true;
                break;
            }
        }

        $this->assertTrue($foundEmailFormatViolation, 'No validation error for invalid email format');
    }

    public function testPasswordIsRequired(): void
    {
        $user = new User();
        $user->setUsername('testuser')
            ->setEmail('test@example.com')
            ->setStates('Bretagne');

        $violations = $this->validator->validate($user);
        $this->assertGreaterThan(0, count($violations));

        $foundPasswordViolation = false;
        foreach ($violations as $violation) {
            if ($violation->getPropertyPath() === 'password') {
                $foundPasswordViolation = true;
                break;
            }
        }

        $this->assertTrue($foundPasswordViolation, 'No validation error for missing password');
    }

    public function testPasswordComplexityValidation(): void
    {
        $user = new User();
        $user->setUsername('testuser')
            ->setEmail('test@example.com')
            ->setPassword('weak')
            ->setStates('Europe');

        $violations = $this->validator->validate($user);
        $this->assertGreaterThan(0, count($violations));

        $foundPasswordComplexityViolation = false;
        foreach ($violations as $violation) {
            if ($violation->getPropertyPath() === 'password') {
                $foundPasswordComplexityViolation = true;
                break;
            }
        }

        $this->assertTrue($foundPasswordComplexityViolation, 'No validation error for weak password');
    }

    public function testStatesIsRequired(): void
    {
        $user = new User();
        $user->setUsername('testuser')
            ->setEmail('test@example.com')
            ->setPassword('Password123!');

        $violations = $this->validator->validate($user);
        $this->assertGreaterThan(0, count($violations));

        $foundRegionViolation = false;
        foreach ($violations as $violation) {
            if ($violation->getPropertyPath() === 'states') {
                $foundRegionViolation = true;
                break;
            }
        }

        $this->assertTrue($foundRegionViolation, 'No validation error for missing region');
    }

    public function testDefaultRoleIsPlayer(): void
    {
        $user = new User();
        $this->assertEquals(['ROLE_PLAYER'], $user->getRoles());
    }

    public function testUsernameUniqueness(): void
    {
        $this->markTestIncomplete('This test needs to be implemented with a repository mock');
    }

    public function testEmailUniqueness(): void
    {
        $this->markTestIncomplete('This test needs to be implemented with a repository mock');
    }

    public function testConfirmationEmailSent(): void
    {
        $this->markTestIncomplete('This test needs to be implemented with a mailer service mock');
    }
}
