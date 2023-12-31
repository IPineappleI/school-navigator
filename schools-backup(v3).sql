PGDMP         9                {            school-navigator    15.3    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24816    school-navigator    DATABASE     �   CREATE DATABASE "school-navigator" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';
 "   DROP DATABASE "school-navigator";
                postgres    false                        3079    24817 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24827    schools    TABLE     �  CREATE TABLE public.schools (
    id integer NOT NULL,
    name text NOT NULL,
    rating integer,
    enrollees integer NOT NULL,
    budget_enrollees integer NOT NULL,
    olympiad_winners_and_awardees integer NOT NULL,
    math_winners integer NOT NULL,
    math_awardees integer NOT NULL,
    cs_winners integer NOT NULL,
    cs_awardees integer NOT NULL,
    economics_winners integer NOT NULL,
    economics_awardees integer NOT NULL,
    physics_winners integer NOT NULL,
    physics_awardees integer NOT NULL,
    website text NOT NULL,
    address text NOT NULL,
    image_url text NOT NULL,
    math_class boolean NOT NULL,
    it_class boolean NOT NULL,
    engineering_class boolean NOT NULL,
    business_class boolean NOT NULL
);
    DROP TABLE public.schools;
       public         heap    postgres    false            �            1259    24832    schools_id_seq    SEQUENCE     v   CREATE SEQUENCE public.schools_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.schools_id_seq;
       public          postgres    false    215                        0    0    schools_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.schools_id_seq OWNED BY public.schools.id;
          public          postgres    false    216            �           2604    24837 
   schools id    DEFAULT     h   ALTER TABLE ONLY public.schools ALTER COLUMN id SET DEFAULT nextval('public.schools_id_seq'::regclass);
 9   ALTER TABLE public.schools ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215                      0    24827    schools 
   TABLE DATA           E  COPY public.schools (id, name, rating, enrollees, budget_enrollees, olympiad_winners_and_awardees, math_winners, math_awardees, cs_winners, cs_awardees, economics_winners, economics_awardees, physics_winners, physics_awardees, website, address, image_url, math_class, it_class, engineering_class, business_class) FROM stdin;
    public          postgres    false    215   �       !           0    0    schools_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.schools_id_seq', 70, true);
          public          postgres    false    216            �           2606    24835    schools schools_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.schools
    ADD CONSTRAINT schools_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.schools DROP CONSTRAINT schools_pkey;
       public            postgres    false    215                  x��\koי�L�
���s�,PN�x�I�ݺEb�+�TDJ��)��Y4�8n�I�n.��/��;Q�Z�ÿ��d�sfH���n1��hf��ޞ�y߱���?οȿ����?�g����{9��?���?�O������������F�A?�x�7���L0��n�]�����߁3?�O���YñO�o�Y��O���wv���#����.��ng{6ۛ�C���,ܟ�Gɴ�����8�[���£� D		H���GX��4IH�Ҙ�0ɒ�f!���W;�Nf~.�F����?w��fj%u��?��L�}+'��&9�揌�F^8�O����	l`!�Yv���/�F�n��i�˗���N¤k�3��0�O���i�|
��h4O����(
h@upc2�'���7����t<��`:�����hz��At4�n�;;�����m���V��8����$f�p��r��j�/�����N���A���=\�����O���~������m8���+a�/��t�w�U�-T�{W]�R�Y~�ޅS?��g���1��2v�ik2��M��~<�R0x�A�\}	��p��	a���������WF���o��ֿ�`�O���/\��l��@�[�u#��>��%�j��3
Rc�k.�u42߻�r�ۅ%��9��XZ��w�a�O����P�q���>�ߒ�y�_w�f�/�r�믎vnd׷�ko݌��7_���׃�eK��pϖ���,7��U�%��, {6�&x��_X &Ki��po���l�n�|
0G���4	��� �?�ð7�������^q
j|e�t�P!�S�rR�핅���R��d���jܼ>XE��F���i�D~���t؋Q8.�T���nf��F�;�q�����+�V�^<9���8W���'k�g�Cp߇�nݜByՀ/�R���\><��c�I��^���x�$�jl@A�b��.�m[u�%)ޜZ�*�����BN%����5Ȇ�����_n���ս�+�<���	�!��>�3x��OI�h�1�*��3���^��[�H���x%�bX��j4�R����?��`R�ل�w��d\�������3b\y]�����W��5���}E��y�_��v��V�B�\}g�_Q�r*R���z�[�Qp�$�;��O&?�ԧ`��4a�B+�STwi�(�.�/$�?��YqM�h2����0�I�g"�$�R�0�2I"��$S(�e��vtpO�T�y��i�FFTf��@�nlD�B�h$�q� ���*<�BG�E��q&���4H`s�l2�욅�MN���2�C�q�!��IBsZ)@�?��UΌ�X_*��w�Y	?�Q�q��R�J!!J'Y��%MoR�������l*�� �]BjoJ�[G��#e�����Lp�i̼Dv�����\���'PI`m�ຏZMry���q*ui�|b2㟠<��*#��cDA�&�ʓ��`�!�ձ�U*�(#L���!���
���˿��!�8h��W�n���2�?�G��K�
K��g��X�b�t��¾��Uۛ6��`ꤋ-�.oME�6���ݱ���Ƨ�-0�e�RE�N�8��q�$�[��T��2�A:���p���Ga%�&��I����H�X�B�BՌG�
����6��0>84KܬƄ;<��o*����{�	���f��c0{�+���7@3֡~�`zlָ�
���� �}`ʻRո*�J�[�n���x2�5Q�؃`�N� c�KC��8ScK�3�Z�!abi�]AՂ���{Eb-Cp��j�ߡ����v�`?��HM��I���������w��;1L�|PK~r7p L���X�A��I�ᄧ�GBFqTS_H;�c�H%�c�����Q�����`炔z`��I�c�tcK�t6g��Q�����o���ћ�V/�8�M�A������m�5j��|lD�h>�߆��W�BY<�^U�bp%+j�1�h�x�c�&R	�2*5^�R�>D'Ή�m��bZ�tz���5m[AH�t.�ٙ`�b�q���0U��,͐N�����a|���e�[�	������Ϡgc�OSeJ����~�� 3�+YH�q-$	�T!8��Hp H4&+�^d5���Yy_�5��� �(�� ����}Q]Jd~�p�F���(�D�B���MgnT�B�{p3��[2Q�I-�/�+��1�[�n<���W�?3���~|[�uN����:g��[v�BL�_�r������P G8�C.c������Y�
��\�,"i�z�3�nȞ�,=[2�1���,
���5zro\	m�F �1�넺���f~r��-P�+��N�az�����ɮ�$��ds��`1u����՟x_�p�c_�r�y_r��<�08��gQdS	w�.rv�z�;�;�Y�2R�͊�Uwj,�k���uUu��}�j��9�mYP˫�&d�6AY-��oD7�t�I�"�����QQWT��k��F9"{�%�K>O��D/VN'+��K+�"�Y���:�P�놔�
���O @�>��K�ߵy�������4ݝ��A��n�twn�h h����;�
�0�#�@j���6!>��239L����rش��6A(f�7�X(ASM4�H�c9��0C�NJ��(L��E[�������\�$��2ѕvl�@*>M7���ouU�e�$L�Pq�%	Z��0�e�h��|�ua�\򇫪�#��g�n�.m�hDk�h.q��I�t��ߙ��Mn����k}4�f�E��z��{��v�ΜT]���pi���!�7������(�1�O�� _5���Ճ�	W����%-�l\&��vHG�O�Z ]<�͂z!�g�s����g��4D���ڽT~3�j2s+=RI� Y+�Ü �A>�x:���0��0L�f0�?�PGo}*Ɣ4gf���G��,��
;7�����
���+��E�ڊ�B�����J�V��M���bT�]��6��V���p~������ۋ�Z��6h�`$�9# �#��aE:�,���X�<0����G��G\,Z��x���P�ݯ;��s��dg�h7��5R;krk�W���61-�'8�1��
TL'�>����-�Ҭu�B�1�_AU�%��d��g7ɟX�*����,�&g:RD��T��A��0O1p�DΖ:W��#���)�nN�e3j�v�뱍JO͂eh,��)��,I��	lC+)V���Tq�2@�iI"E�,Ƃ+��) $�0};��W��XN��^吖��ء�'���y���"<�;��{ʌ|?��N|`�}��Kf@����We�6��Z��7�e����D�8��T�(�"���Y�M2�:�ר1+j�����Sk�5�ʔ��9�Ys4@��2�*���U޿X-�T*�x�e������29�薚˔�H�U_��V�J���XZem���x�/�<�[n�׶!d"�!�˲E<���qoo{2���x�AU3h�g@�}��6��/Y���Qw�A9�GU5��M�[1�V��2�(d�Y�1�?$	3�5$U�����r�ɔF��sk�f����Q>*&z1�������3�5n5����oGzV]�vr�����J~�(��iF�h��hϰ�N�	/<l -Z71s��R�U��i¦����B�>�����`649��S���N�� )�-����`i�??���rHrI�r`�2���܁ZSӬ�>��f����L|�
>L��x8���ҝ}3�j����;�a�㢇�U��}��L*���Eq4��[���3�w[>�Y�dB*Ѽ���J��Pjf��,S(�xݝ����Bln.J��Tj��ʿ����Z�˸�"�m
u*T��գ8-
~<��`���?܃�H��̒Z�|���̀}��Q���8ܸ���Ɠã��v&�{Ӟ�̏z�WU-���u�k��J~�SL�� �  q��$�L"��R�g�"3��RwI�>�4"���le�RA��2�:7!Ip��$�Q�R�[�{�����1+�lͽ�?}Qւk����TH���@i�(�ad�H�u��i�N-p/I(���/XB�?o�K�b'�����g�|3J8"��Ǚ�"�<�F8�A3JW�	�)�v8��c�_����&�1G�Xl��ډ��J�~ը%�Nt�5a�X!�ۅe��ְl2X�#��t�rҴ.�3z�d +Xet�4P�F�*AbMBY*�t�Va|0��iE{v�bb�f��	9���>-i|�q��L��m �S�(C=����{�J��j����P�e�7v�;��8�M�:lb����so_ӑ�2e��� 8UJ	��X*?KB�f�C��T�4��4��.x�@���`Emb�{���8��4�4B����֮S�E:�'⦃�H2��2$��H�!�!P�H����iQ
ϳ�Hvo�p���9�1L��g�*�x�k�Ƥ&���I�D����(��D@��"��xAX����#Z`E�z��g<���6}����8,��2�,N��d�#$�@	�[(!ӄ�sТy)34�<X�&� �zD��.G��ӑ��0k
�je4�+�b��g�4�xJ�p��z!��A,[Dc��c�Ԥ�iXQ����������K;�x��-o����D�"�7=+j�ɛ��	Xc�}.�C�������3�YF ��!��<{׹g$���O�7�u�k,�RWju�{3,�m�b��	k�i.#�����:��Y~�@7x���.��<c�c�c��(x���f��q�������E�2h����l��4?ſr0�p}�1�/˷�����!jŸ)��m]3�c0?���<�)�W.6U��Wb7uu���i��>����9�������@��wa�����W��Y8���p7	�dlG�P��Q)X�2�E���&x� g�C��v�f�6�$��ާy���<0`�ɉ��M����/��@���h~�9d;�"Y1y��B�1��ɋ�O���Eg�#g�u�Z��{�~����!��eګ]�j�g9Ok����rl�|n����ę�\�+�߼������͟�o�?^��w��8p����x�7��㛯M ���7G�1��~x�8��4��E��M�ҥK�H�t�     