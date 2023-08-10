PGDMP     0    $        
        {            postgres    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE     |   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3326                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                        0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16496    schools    TABLE     �  CREATE TABLE public.schools (
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
       public         heap    postgres    false            �            1259    16501    schools_id_seq    SEQUENCE     v   CREATE SEQUENCE public.schools_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.schools_id_seq;
       public          postgres    false    215                       0    0    schools_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.schools_id_seq OWNED BY public.schools.id;
          public          postgres    false    216            f           2604    16505 
   schools id    DEFAULT     h   ALTER TABLE ONLY public.schools ALTER COLUMN id SET DEFAULT nextval('public.schools_id_seq'::regclass);
 9   ALTER TABLE public.schools ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �          0    16496    schools 
   TABLE DATA           E  COPY public.schools (id, name, rating, enrollees, budget_enrollees, olympiad_winners_and_awardees, math_winners, math_awardees, cs_winners, cs_awardees, economics_winners, economics_awardees, physics_winners, physics_awardees, website, address, image_url, math_class, it_class, engineering_class, business_class) FROM stdin;
    public          postgres    false    215   ?                  0    0    schools_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.schools_id_seq', 70, true);
          public          postgres    false    216            h           2606    16504    schools schools_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.schools
    ADD CONSTRAINT schools_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.schools DROP CONSTRAINT schools_pkey;
       public            postgres    false    215            �      x��\[oG�~��`�o!��'q�	�d��� �oG"����)q�q�E�`b$��治yم�؉r���aɞ�n���� �l���Թ}�;��;ٟ���ϳ�6�o�����x������wp��P�g�0�z���8����w0ֈ��6�o{�g���m8ݣ�����;�Op�+8r<�;�(?�=�mp�ٚNw'�;[��9o�$��d/���hڋ��`7������ͫ�r�[��no�n�:����[��ov_;�v�n��1�T��m���A�)����i��K+$�P'iUZ.kBb�$d�����-�a��?ndgO�����I��-;�~����� #x7�vb���;c�n��$��xo3��v�� vd8M����0h@ups<�Ʒ���7{��a2�l��?���U�
Qa4�Bt?<�O������p�����D���;N�K��#�&\ ��5�6]������d�؉����'���Í��s=\ހr���ld�{�װßg�fw��S{ԭ���j��aNU4W2��#RU��c�_ñ;p�'p�4�!�VkX��/�~su;�����E�@����ɞ?�����_�>i����^bd����C�}UX.q��Dl�u��%9{ϙ ����m�o�=η�6���[�گo������t��Wn�t��p�fz}3��歰?=x��?&��F-[bM�{���wdg�p}K0�?�Y �lJ���-x���[ ļ����ٝ$p�`2��$ p������do�ā"�����Gf20����GwNu`��)����҅GB�@>L��Iɶ�nWT$��6�$�ퟜ���ezf���Hd��!�� J����(R�B�B8i/I+ܽ�8�TG9��z+k/����8Wģ�?;�=���>�v�V@X)엗�\*K����������&ឺ��D�ѸIX�*,؀�@�*�;��om�".�H���2W�������\N%���5H;��
��_o�������^��W�؄t�b�^��Q�#dL6sc�L/�Fs��=�@rn�'�q�������,:�Y(!�� n8�1�>=b�j�H�±o�z�tccq^s`�fo�Ɠޡ�ɛ�Q26�i��L�!l��� ��!�	C$�c��$���i���Pܺ�I P��J�P���ۈ-�g.2�����9B�.[H��=��Ȏ6I��� }'�V�=��m� �uDD8��"�rU��篺�k��y���p�}�V��^�B}�x�����!��p�T$?I%�aܺ���
����l34H}��3�)�-�NQ�e���<���`O�)������b�G��q��a��|ab"%�RIc���'(N2XZD܎O�h�+�e�X�*]n@�)m�>�XZ�����OVB Y�sx�K����^�oW.l8�N�6'H��q߭��޹�$=����R�����+%!�Y=�������*��]�/�	��� �ԮF�!�P�RDH�Sq�*xI��ÛD@�@���V2�ܚ.���=�K 7M��~[�*���\Qh�3w�S\b3/�%:G�GE��W-缅�� �RX� ��N�\mVt�8���G>v���'(�&��q�}~�1� �ȅ��:&�E��R�H%҄�	E ��\��%�l��
�A�����A[e�5�Nt����;zڈ��[�U\�~d�\�y�W.����W�nږ��!�Ϸع�3��8w�y�c��O =�g��6����,�>�#}I�FX�X��"�A::��p�.�Ga%�&��q��J�P�H$B�jƣ|%�a^O�Lf��%լƄ;<q�o����a��X%��u�8<�`�6�?�ЌuhZ��frd�T�>��#[�B�{����qY�Էo��M��x�c�`�� �G�Aj"�KC��8UcI�3l�C�Xغ�P���d�N�X�\h�Lyt(v�r����ߋ �W��H����I�~^�md����1l�|TK~r	�p L���X�A�����'��B�q�S_H;�c�H)��	���G�G������C��sZ����ҁ-ď��`����%@��OP�p��7��n:��6im�N;�Cm1m� ���-��#+���i�$E�������BzeT�������,�	�G(���Tj<l�N}�N�-»�-Ť��5Qk�ȷ����9fg�ђmG�V4�M�@Gi�"C�H8��rp�=�A:�~T@}'�U���g�=[3~f�:[
-�7G����_��B�k!��Rpd-�� �hD�=�j�5x���&+$e-@h^��e%u�������\�(	2�%(E�KL�@�i5��������-٨���DuԘ�
��j<��xs�?����}|[�uV�ځ(�%�o�
1~U�9�B�1�P ��D�˨���I�a��e	�Z.G��X=�Z_�t�;��.�3����慍�.�
A�;*�6f#���uB����f�v��P�+��Jcbz�������ce��U�J�n��b�6����,|]����U%@��E����%'�B�l�j�WEN/Qw�u�7\D*�^����N��~���CW�.���ϣ\���e�j���,��U�{2R렬`ճ"��ۙ:�$X���K��S�(�+J��9�X��;��%���eq�K����奾~��xpG��uCJ_xT�� @�>���︼�c�_l��h<Iv&ۇ=P)��=��� �d+"��hj��m 5g�j���G��*L����tؤ��6A(f��p,���&r$��I�IQ�D%%�v��Ѣ-pq�~rP�\�$��1ѥ�t�@J>Mע+�ouU�e�$LFPq��1Z��0�e�h����ua�\��˪�#��g�p�U�
tш�1�^�a�j�ӿ3ms��jmՅ��h:$:�����'j���������VRu)S�E�%A���8^�썷͡�>�K�i_��������W_���-w�?.�Q;�#�B-�.GvA��i��ā���C��u�rZ���vk�^*��� 5����.)�D���aNP�A>�x6�Ü0��8P�f,0�?>WGou.Ȗ4��q
���z	�u@U|����~�ݍBA)/�Rv|ѥ�<G�P�v5k����}Q�&T�`1*�VY���V���p~��~�Y��yh-ZQk4g0xٜ�B,�J�0Cm��*M��|5�2Ld��Q9��".-��9�R������y���T��w�c�p��M�����7�ML��	��������,T��u�Bܖdi�V�B�1�_B��� l`$7*��:�"Q���h�"��&�8ա"*I��G:o�y����&r�й�O_A�|F�w�r�U6�6���~rQ�]��EV����ɵ�>�mh%�r�RCW,����$T4M#,���=9�d��b����}C�ˉYc׫SsY�k7��4�~��!�ϲP]��gp��b>bOّ��x��r_��Ē�<q�����5"�V��p�X�0f$V,
�4Q	
��hr> �<h�I���F�]Qc=��U=�8;�)���V�YL3٣BĕyWqi�$�p����r�w��B����(������j��H��TKPi��D*�-|�բU��r.���bͳɥ�|���E�".��f0��n���8f�A���BGu�if��x�w��4{�1{�e���H�:�-��VK�a)W��̤La�q�,z`�D�{U�i1�dK�^��3};i���(��3���������7��G\��u#=ˮc;9��y�_p?��̃���p��z4�gXQ�Մ6���ۘ9�c!�2t��$f��~|��F��`�?؜PȈ���K&�#���&�a`��0�_��^J�$��R�0RB�]�@��iW�lS3�NWb&>�A��d4������޵G��v	�t��r�E�)x���>�h'��H��8�tG��5�SN�ߛ�����,�"��JF4/zRȍF
 >�;5��Bǫ�̽��bss9P��J%��i��K��?�5�����ٺP�D%�oFI^�����AM �  5�p��n ���۷Kj�����?���z%�O��k=4���h|p����xow�u��a��㲪�}��v-US�o�#59��ќ�*��uTᩝ��s)Ku���eK+�
ʝ0�1Թ1�S�{\�	�VQ�Ӿ�A�[A�������w���\	^�^S!9.rkaDbZ|+bq]�iU���$��Z��,a�?k��b��������:f�pDJ1�R�E�yd�F81� �����M;\ӱͯ�
��R��1G�Xl������R�~٨%������k�B�B����~�a�<d��GN���Ťi]�z�d +Xit�4P���*A"M��,2
3]�U�̢�c[ў��
1P3�Ⱦ��s�M��4>�8h���6 ���F��.Fpcý`���
I5DM`G�B�2�U�;��8�M�:l������so_�"i�f��Ap*�
ǑT ~�ĉц�0�*Itu�HxP��I�Jh�]��61�=DK�1�ݍ�Cn�RM�d+�)��<��3��~~H�)�U���a��a*�4	i�+-J�y:��m�# .XP�t�|���Ɗ.��Jq��1�IɥE"i�*�ЀE�P��/�]��|D��WO���kC�t�e�o�S�F>�^$ބE1�4:D�	���2�IuZ�#/e��k���Z���A�ň�b:�B��P��F��*lAy�"NӐ'�'��	дbA�"��<s�&5MÊZ���`�g�h^_�����3��4��,Q(���M����c�fC||֘s�������|CΘ��,#���!�/=}�y`%���O�w�v�k,�R�ju�{;,��b��	k�i."�����<��Yv�@�xD��.�*=c�#�#��(x������QbxX��t��|�2h����\��4���3��V��r|��_:vy��UL5E��m�������ܿ�ǂ=[�����
7�Jܦ./�}<�~��_�랃����O��Q(���.4ydѵ���95�Aԛvb�#W8���D�J����I7D�va7��83�g�*�h_`6 hsJ������]"���߯v�"i5�������� ~Yis�vlE0rb��!��3Jb��&/�>=�F���+��ː�?�W-��<�9����)�z�d�����-Ʀr�]�ҥK�L�w�     