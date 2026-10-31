# Pontryagin–van Kampen 对偶　`thm.pontryagin-van-kampen`　·　说明
根 `../`

**证明（按三类情形拼起来）。**
- **$M$ 离散**：经典 Pontryagin 对偶。先取满射 $\mathbb{Z}^{(I)} \twoheadrightarrow M$，对偶后得闭嵌入 $\widehat M \hookrightarrow \mathbb{T}^{I}$，故 $\widehat M$ 紧；求值 $M \to \widehat{\widehat M}$ 在有限群与有限生成群上用初等计算验证，再用「$M$ 是有限生成子群的滤过余极限 + 对偶把余极限变成逆极限 + 两边都正合」取极限即得同构 ✓。
- **$M$ 紧**：$\widehat M$ 离散（见「离散与紧 Hausdorff 互换」）；对紧群用**特征标分离点**（Pontryagin 的经典论证：紧阿贝尔群的特征标构成足够的分离族，用 Peter–Weyl / 有限维表示论给出），得求值 $M \to \widehat{\widehat M}$ 单；再用前一情形与紧的 $M$ 的对偶离散，把单射性与满性补全 ✓。
- **$M$ 一般局部紧**：用结构定理——$M$ 含开子群 $V\oplus K$（$V$ 有限维实向量空间、$K$ 紧）、其余商 $D$ 离散。对群 $V$、$K$、$D$ 分别已知对偶自等价，而三者通过正合列拼起来、对偶

> 续见 notes/thm.pontryagin-van-kampen.4.md
