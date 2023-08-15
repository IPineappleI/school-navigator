PGDMP                         {            school-navigator    15.3    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
          public          postgres    false    216            �           2604    24833 
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
�����s�,PN�x�I�ݺEb�+�TDJ��)q�:�fa�-�I��ew�e�c'���_���%��3Cr�p�HT#�!�G3�������I'�S�Q�Y��F�u�C~���o�����C:�uhw��]�p�N���^oo���FX�l#�������ޅ�<Ώ����w��=8�i��F�q�,?�ʟ��첓�{��,}�ېF�n��yo�w�����?����8Lz�ۃa���xo30�vͧ ���$�n���T7Ɠx|�
y����Q8LG���a_�'ӽ��_!� �&W��G���V��=�#����f�9��ow��S���Hb�	�w����\��ݾ����� ;�=��?�m�>��ݘ}0���� �Y��F~��;�Y�xv�?3G�J��ˠ&��fU�AssU���G�U��I]FMp�+8vN�������j���-���7w��I��G�t4�����������/�B������?�o�:�%=x����{�h"^������L�޲�[d�	~/�V�ĜQ��۬%�l����\�va�؀�[K,-r�{k���'�w��1�����l�go�����ۻӭW^����׆�7��ٵ�oF���[��c���hԲ%�t�gK�KyG���������j�=��?�����s�d!�d�NR8S0�����4 p������to�&�"�����G�dvGcs�!8�A�-NA��,�.<*�a
VN*���p�P
�����7���Q��3||^F#��;��;�8t�p�
!*�+��Z��^c�e����
�U����kG0�����rO�'�O���VJ��U>�J����p��h|��&ឺq�7��q���UX���9�;��ol��h�xsj���av�|}bh!���V�d��tb�����������^��W�؄t�b�)�`٣�G4Șn�ڙ^ҍ�z9 ��6�ԏ�co4&w���Yt��PB��@ܰ�c�}z~h�j�H���o\=c���8oxNýIo�Lz��(I���i��N���4<��@�������y�e�I��d*�9
�,�hR�|m�@�V��d� �*7[��\d5�5��9B�.[J��9��CȎ&I��� }��F�Bp��w� (�q���K��Ue^_�j_����+��m��[��}�������;���S��$N�øug����l24H}���)�-�NQ�e���<���`O4)����`����q��a��|ab"�$�R�0�2I"��$S(�Ĳ2�����4`���kS����?���K�쀘Ϲ�d$�u<�W���*<�U�v�"������$H`s�l<�횹�QO��x]d�j���g8$	i��E�-~�?1W95�b}�H���% ��v5�хr�"BB�J�L�K�&ޤ�
^�o��ͭ�"Y`�C �pӔͷ�V!76�R���3���`#�y,�9R=*S��j5�-,�Р����U����h��%�T4���ئ㟠<���'.%���cDA���I�uB0�ÐЌ�X�*�a���{����K��(�΃��������Nk���f�?)��3{����T��X���$����l�=���޴)CP)�o�uyk*ҷq6���'6ß@ z:��MJ;Y"}ZG��h/�00�̡e��ttn��]��JJM"A�3���d�H�
����x��x=m2�A�`��Y�	?vxj]�pw��-1'��u�8:�`����6�?�ЌuhZ4�frdָ�
���c!�}`
�Rո*�R�[�n�&�x<�1Q�؃`��� c�KC��8ScK�3�Z�!aba�&�T�<��+k�K-T)��6P�V���{1�uGj��O�O��%�F~>����ǵ�'��q��i؋%�D���Dp�Nx�x$ddG5����#?fL�T�?vM����G1��W�[���;��cO���k�[�����(�+���P?A��-�ߊ7���1m�ڌ�v(o7m� ���-��##��C�i�$E����ʂ�BzeT�������,�)�!�Q�H%$ʨ�x�J���8'Z���[�I��5j�ִQl!�s���ێ#�h���ei�t"�,N����� �QY2 ��0ߺ���Ϫ�z6f��pu�Z1n��g2#������B��J�#k��Dc�t�yV#������5Y!�(kB����(���եD�7�
�i�P�Y��H�*di�(�t�F�*�{ 7�%U���������E��Y��3LP�7��S#����� �;Pg��DY�,�~ˎP���RΑ���0
���q�e����t�u�*oY����ˑE$-V�������%��@��2�4p�Eac�K�B��*�̓��=�|q�P7�q���.R�*p�ViLL�Q��`��=ޱ�,\ݕ�b��,��nӕ����kns�WN�6���5ϧKNЅ�������]��N�o��Tz�"cI՝��Һ�][�.���ϣ\�]�2�ڢ� jy��ބ��:(�X���b�v�4	�$�Ҿ�"*�
3ymN0�(Gd��ly��@Y����d�|y�o���8k3\��pݐҗ9����|n��m�W~h����p2Oҝ��a�_��vOw�{���6ي�����@s�:���[-`�s��(3��T/�K�M{8n�bf~C��4�DC��8��#�3�)�$ڎ´ !Z�.�O\ ʅO��-]iH����t-Z��
�VPW%\F�A�d�P� ��*�^&��{�zP��%��
;�y{�G��V��F������
�TKg���i���Vk�.��G�!ёm�^�?Q�G��ǯm��IՕL��iZ�xsk�7����ӽ4���Us�z�_��p%��ū��^�r��2q��C:� *���ql��F8K,��>���.��!Z(m����	P���[�JJ�Z��9�����s¼���@u�1� ��\�չ SҜ��)��O�%<�YT�vnX��%v
*y�W��K6�9��ʷ�YS�ܭ�כ<P��Ũ��Zem
�ۭn5������{kw桵lE�ќ�H�esF@
1F$5�<�t(VY*嫱�y`"�/��ʁ��X���g��i�?�f{T%v�-��5����Ýp
�H��ͭ�n9|S�Ĥ�����`>X(P1�e�����$K��utF|��H~5T9���3�?�N�ĂHT���`1��0�8ӑ"*ͤ��:o�y����&r�Թ�O_A�|F�w�p�.�Q���Co?ڨ��,X��2����ق�Zc��6��b�OYHW,����$R4�b,�rȞ@2�g�i�y�!q��Ĭ��U���,��z������gY�.³g�SK1���ȇ�s<������dF$Ol��0}U�o���z\6�(JI��(KU�".�*����y�$���}����z0�zZ;�)�T�V�YN3��BĖyWqeؤ�p����j�w��R�ś�(�����%��\��y�%���\׷"U��?>�j�*k@��k}����rÿ�!Aa^�-�B@kF�ݭ�t��aT͠9�!tT��fV،7|�`N���QF���D����i�t�qE!�`�)�!I�A�!��j�����M�4��Z�7���l��i1ӌ���l�!�q3�yT���};ҳ�:������wP�E��<ؐH3
GˮGx�uZMx�a�hѺ���?��,C�(M6��'�*���`4���Ӂ�	���*�н�t28I�`o�������ϡ襔k@�*�{ #%�!����Ԛ�f�:��45�t%f�3T�aLF��x��n��]s��h���A�.]ĭ��M�ÌfR���/��Iw��Z#8D��ٿۊ�y͂/�	�dD�ʠ'��J��Pj���,S(�x՝����Bln.J��Tj��ʿ����Z�˸�<��u*TB���8-
~��G`���?܃�H���͒Z�|���#�G�w�p�����������O��3?��{\V� �י� �  �j*��O1u�&G5�#���3��WK��	i3��TwI�^p���P��r��܉R�@���$��e��(I����=x
v�
�^��n���)���Zp%x]�{M��:ȭE(�����"!ׅN���;���$!���B�`	:��A��!��^�k�!̳u�(�Tbg�T�8��4d`I�(]�&��h�����i~5W0f���c�5c�9�k'RN*��e���d�k:��ׄ�b� o���Zòy�`Q���Ӂ�IӺ �R� V��� h�4�(U�Ě�
�8T�骭��`�ӊ�� �.�@�#�rα4}^���������� 0�Q����	���&�+$�=4��
1�Xw�tw�hq ��u��>#i���޾�#e�f��Ap��
'�T ~��打P�LG�Vi��i"�A]�&�*�v���� �-��pv;&i�i�J5���\�,ʋt�7�N��!�d(Q1dH���
CC�
�&M�Ӣ툋#�!��r�\O���0��}`��❬���T\Z��&�	�B�o�H*��z�a=�ܣC��h���	{�rm����l��\t���G��ϋě�8�"����`%�o��L��A�v��м�`MXP�P��>��ZLG^�a����h WTŀ-(�2�i�"��T��B4�X����1�©IMӰ�V#z3����'�W×v<�9�<[�Jc�$<`�BD�ozV��7*��c�Ƃ�\��ۧ~T�r��d` ������9\灑�>��?�߾ށ��(K9\����Ͱܖ���'�����(f2�nu~��^%���"7],Uy��L���Q�tM�2)�4�Q�#@�=��ˠ�G����G�|W,�l�>\`�����f~���}�F1n��uۆ�������[�l�+�*��+����P��<����}F�v�?���P���]Xh�ؠk��"sNqo:�I�8���| �%�T
��L����	-��<+�P �|�ـ��)ɀg��i�;�D4�h�[�6E�j*>���Qx4 �!����؊`d���C
�gT�4�&/�>=�F����(�2d����%� �'�p#˴W�<�^�b�֠z���T�܊�)0捉3-9W��y{3����?�ݙ}�(�KZ��s���9��M�J���F7_C��7n�#��}���Q���o�7�@��ޥK���w�     