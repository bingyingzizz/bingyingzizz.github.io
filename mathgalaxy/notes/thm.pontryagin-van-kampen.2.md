# Pontryagin–van Kampen 对偶　`thm.pontryagin-van-kampen`　·　说明
根 `../`

⭐ **这一条是凝聚态阿贝尔群那套理论的原型**：把 $\mathbb{T}$ 换成别的测试对象、把「局部紧」换成别的条件，就得到各种对偶（Tannaka、Gelfand……）。凝聚态数学把「$\mathbb{T}$ 换成 CHaus 上的层」升了一次维。

**证明（按三类情形拼起来）。**
- **$M$ 离散**：经典 Pontryagin 对偶。

先取满射 $\mathbb{Z}^{(I)} \twoheadrightarrow M$，对偶后得闭嵌入 $\widehat M \hookrightarrow \mathbb{T}^{I}$，故 $\widehat M$ 紧；

求值 $M \to \widehat{\widehat M}$ 在有限群与有限生成群上用初等计算验证，再用「$M$ 是有限生成子群的滤过余极限 + 对偶把余极限变成逆极限 + 两边都正合」取极限即得同构 ✓。
- **$M$ 紧**：$\widehat M$ 离散（见「离散与紧 Hausdorff 互换」）；对紧群用**特征标分离点**（Pontryagin 的经典论证：紧阿贝尔群的特征标构成足够的分离族，用 Peter–Weyl / 有限维表示论给出），得求值 $M \to \widehat{\widehat M}$ 单；

> 续见 notes/thm.pontryagin-van-kampen.3.md
