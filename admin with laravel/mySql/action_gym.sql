-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2022 at 09:14 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `action_gym`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `icon`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'STAY FIT', 'Galley of type and scrambled it to make a type', 'icon20220804045831.png', 'category20220802112628.jpg', '2022-08-02 05:26:28', '2022-08-04 10:58:31'),
(3, 'LOSE WEIGHT', 'Galley of type and scrambled it to make a type', 'icon20220804045906.png', 'category20220804045906.jpg', '2022-08-04 03:48:50', '2022-08-04 10:59:06'),
(4, 'BUILD MUSCLE', 'Galley of type and scrambled it to make a type', 'icon20220804045953.png', 'category20220804045953.jpg', '2022-08-04 03:50:44', '2022-08-04 10:59:53'),
(5, 'PROTEIN PLAN', 'Galley of type and scrambled it to make a type', 'icon20220804050018.png', 'category20220804050018.jpg', '2022-08-04 03:51:48', '2022-08-04 11:00:18'),
(6, 'BODY IMPROVE', 'Galley of type and scrambled it to make a type.', 'icon20220804050043.png', 'category20220804050043.jpg', '2022-08-04 03:52:31', '2022-08-04 11:00:43'),
(7, 'PERSONAL TRAINER', 'Galley of type and scrambled it to make a type', 'icon20220804050122.png', 'category20220804050122.jpg', '2022-08-04 03:53:24', '2022-08-04 11:01:22');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `title`, `icon`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'YOGA', 'icon20220802125542.png', 'YOGA20220802125542.jpg', '2022-08-02 06:55:42', '2022-08-02 06:55:42'),
(3, 'MUSCLE BUILDER', 'icon20220806052315.png', 'MUSCLE BUILDER20220806052315.jpg', '2022-08-05 23:23:15', '2022-08-05 23:23:15'),
(4, 'CARDIO', 'icon20220806052352.png', 'CARDIO20220806052352.jpg', '2022-08-05 23:23:52', '2022-08-05 23:23:52'),
(5, 'STRETCHING', 'icon20220806052433.png', 'STRETCHING20220806052433.jpg', '2022-08-05 23:24:33', '2022-08-05 23:24:33'),
(6, 'PILATES', 'icon20220806052454.png', 'PILATES20220806052454.jpg', '2022-08-05 23:24:54', '2022-08-05 23:24:54'),
(7, 'RUNNING', 'icon20220806052555.png', 'RUNNING20220806052555.jpg', '2022-08-05 23:25:55', '2022-08-05 23:25:55');

-- --------------------------------------------------------

--
-- Table structure for table `contact_forms`
--

CREATE TABLE `contact_forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_forms`
--

INSERT INTO `contact_forms` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Jahid', 'jahidjd18@gmail', 'This is from jahid', NULL, NULL),
(3, 'Hasan', 'hasan@gmail.com', 'Hi, this message is form Hasan', '2022-08-03 23:30:40', '2022-08-03 23:30:40'),
(4, 'jahid', 'jahid@gmail.com', 'this is the test message', '2022-08-06 01:02:09', '2022-08-06 01:02:09'),
(5, 'yesy', 'yeys@ghai.com', 'huaoi', '2022-08-06 01:04:06', '2022-08-06 01:04:06'),
(6, 'yesy', 'yeys@ghai.com', 'huaoi', '2022-08-06 01:04:07', '2022-08-06 01:04:07'),
(7, 'RAMIDUL ISLAM', 'jahidjd18@gmail.com', 'aafs', '2022-08-06 01:05:56', '2022-08-06 01:05:56'),
(8, 'tst', 'test@gmail.com', 'test etst', '2022-08-06 01:10:59', '2022-08-06 01:10:59'),
(9, 'sf', 'jahidjd18@gmail.com', 'asfsfa', '2022-08-06 01:12:17', '2022-08-06 01:12:17'),
(10, 'MD. JAHID HASAN', 'jahidjd18@gmail.com', 'sdgdg e t', '2022-08-06 01:13:04', '2022-08-06 01:13:04'),
(11, 'sdfsdg', 'jahidjd18@gmail.com', 'sdffdhhfhd r', '2022-08-06 01:13:39', '2022-08-06 01:13:39'),
(12, 'RAMIDUL ISLAM', 'jahidjd18@gmail.com', 't  try r ur u', '2022-08-06 01:13:53', '2022-08-06 01:13:53');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `generals`
--

CREATE TABLE `generals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about_text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `bennar` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about_bennar_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classess_bennar_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `package_bennar_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_bennar_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_bennar_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` char(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `footer_text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `about_photo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_photo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `generals`
--

INSERT INTO `generals` (`id`, `logo`, `about_text`, `bennar`, `about_bennar_text`, `classess_bennar_text`, `package_bennar_text`, `trainer_bennar_text`, `contact_text`, `contact_bennar_text`, `email`, `phone`, `address`, `footer_text`, `about_photo`, `category_photo`, `created_at`, `updated_at`) VALUES
(1, 'actionGym20220801072001.png', 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable\r\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.', 'bennar20220804093342.jpg', 'Fitness is not a destination it is a way of life.', 'Fitness is not a destination it is a way of life.', 'Fitness is not a destination it is a way of life.', 'Fitness is not a destination it is a way of life.', 'Always free from repetition repeat predefined chunks injected humour', 'Fitness is not a destination it is a way of life.', 'jahidjd18@gmail.com', '01627809808', 'Mohammadpur', 'Established fact that a reader will be distracted by the readable content.\r\nVarious versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'about_photo20220804054412.png', 'category_photo20220804045741.png', NULL, '2022-08-04 10:57:41');

-- --------------------------------------------------------

--
-- Table structure for table `home_camps`
--

CREATE TABLE `home_camps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_camps`
--

INSERT INTO `home_camps` (`id`, `title`, `description`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Join now and get 15 days free access!', 'Alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use.', 'membershipcamp20220802124015.jpg', NULL, '2022-08-02 06:40:15');

-- --------------------------------------------------------

--
-- Table structure for table `home_motivations`
--

CREATE TABLE `home_motivations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_staff` int(11) NOT NULL,
  `calories_burn` bigint(20) NOT NULL,
  `happy_customer` bigint(20) NOT NULL,
  `photo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_motivations`
--

INSERT INTO `home_motivations` (`id`, `title`, `description`, `total_staff`, `calories_burn`, `happy_customer`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'EXERCISING BODY AND MIND', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.', 100, 60000, 5400, 'homeMotivation20220802122939.jpg', NULL, '2022-08-02 06:29:39');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_08_01_175405_create_generals_table', 1),
(12, '2022_08_01_222632_create_sliders_table', 2),
(13, '2022_08_01_223312_create_categories_table', 2),
(14, '2022_08_01_223342_create_trainers_table', 2),
(15, '2022_08_01_223408_create_home_motivations_table', 2),
(16, '2022_08_01_223431_create_home_camps_table', 2),
(17, '2022_08_01_223505_create_classes_table', 2),
(18, '2022_08_01_223524_create_packages_table', 2),
(19, '2022_08_01_223541_create_contact_forms_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` int(11) NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `title`, `rate`, `description`, `created_at`, `updated_at`) VALUES
(2, 'Basic', 2500, '[\"Cross Generation\",\"Stott Pilates\",\"Spinning\",\"Zumba\"]', '2022-08-02 23:04:50', '2022-08-02 23:04:50'),
(3, 'Standard', 3500, '[\"Cross Generation\",\"Stott Pilates\",\"Spinning\",\"Ripper\"]', '2022-08-05 09:15:21', '2022-08-05 09:15:21'),
(4, 'Premium', 5000, '[\"Cross Generation\",\"Stott Pilates\",\"Spinning\",\"Ripper\",\"Zumba\"]', '2022-08-05 09:18:45', '2022-08-05 09:18:45');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `big_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `small_text` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `photo`, `big_text`, `small_text`, `created_at`, `updated_at`) VALUES
(1, 'slider20220802104338.jpg', 'Get in the groove', 'EXERCISE YOUR MIND AND BODY.', '2022-08-02 04:43:38', '2022-08-04 06:09:36'),
(3, 'sliderUpdate20220804050353.jpg', 'Commit to be fit', 'LOVE YOURSELF ENOUGH TO WORK HARDER.', '2022-08-04 05:04:58', '2022-08-04 11:03:53'),
(4, 'sliderUpdate20220804050404.jpg', 'Turn fat into fit', 'WILLPOWER KNOWS NO OBSTACLES.', '2022-08-04 05:06:18', '2022-08-04 11:04:04');

-- --------------------------------------------------------

--
-- Table structure for table `trainers`
--

CREATE TABLE `trainers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trainer_type` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trainers`
--

INSERT INTO `trainers` (`id`, `name`, `trainer_type`, `description`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'MARTHA SMITH', 'Cardio Trainer', 'Majority have suffered alteration in some form, as opposed to using', 'MARTHA SMITH20220802115822.jpg', '2022-08-02 05:58:22', '2022-08-02 06:10:39'),
(3, 'ROBERT LUKE', 'Dance Trainer', 'Majority have suffered alteration in some form, as opposed to using', 'ROBERT LUKE20220804050212.jpg', '2022-08-04 04:06:20', '2022-08-04 11:02:12'),
(4, 'JADE PERKINS', 'Yoga Trainer', 'Majority have suffered alteration in some form, as opposed to using', 'JADE PERKINS20220804050224.jpg', '2022-08-04 04:06:56', '2022-08-04 11:02:24'),
(5, 'LAURA THOMAS', 'Cardio Trainer', 'Majority have suffered alteration in some form, as opposed to using', 'LAURA THOMAS20220804050235.jpg', '2022-08-04 04:07:32', '2022-08-04 11:02:35'),
(6, 'RICHARD OLSEN', 'Dance Trainer', 'Majority have suffered alteration in some form, as opposed to using', 'RICHARD OLSEN20220804050245.jpg', '2022-08-04 04:07:56', '2022-08-04 11:02:45'),
(7, 'KAREN GOMEZ', 'Yoga Trainer', 'Majority have suffered alteration in some form, as opposed to using', 'KAREN GOMEZ20220804050259.jpg', '2022-08-04 04:08:17', '2022-08-04 11:02:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jahid Hasan', 'jahid@gmail.com', NULL, '$2y$10$f87FczJawN2yGNVieyq8NOLYlM6B0OOm.KuIjExCLoY1Kjvc7/bHK', NULL, '2022-08-01 12:03:22', '2022-08-01 12:03:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_forms`
--
ALTER TABLE `contact_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `generals`
--
ALTER TABLE `generals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_camps`
--
ALTER TABLE `home_camps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_motivations`
--
ALTER TABLE `home_motivations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainers`
--
ALTER TABLE `trainers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contact_forms`
--
ALTER TABLE `contact_forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `generals`
--
ALTER TABLE `generals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_camps`
--
ALTER TABLE `home_camps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_motivations`
--
ALTER TABLE `home_motivations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trainers`
--
ALTER TABLE `trainers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
