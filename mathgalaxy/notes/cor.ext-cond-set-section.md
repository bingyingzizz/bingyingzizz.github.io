# Ext 的截面公式　`cor.ext-cond-set-section`　·　说明
根 `../`

**证明。** 把 Stonean 上的截面公式 $\operatorname{Ext}^{n}(M, N)(S) \cong \operatorname{Ext}^{n}(M \cdot S,\ N)$ 用在 $M = \mathbb{Z}\cdot X$ 上：
$$\operatorname{Ext}^{n}\bigl(\mathbb{Z}\cdot X,\ N\bigr)(S) \cong \operatorname{Ext}^{n}\bigl(\mathbb{Z}\cdot X \otimes_{\mathbb{Z}} \mathbb{Z}[S],\ N\bigr) \cong \operatorname{Ext}^{n}\bigl(\mathbb{Z}\cdot (X \times S),\ N\bigr) ✓$$
第二式的依据是自由对象的两条泛性质拼起来：$\mathbb{Z}\cdot X \otimes_{\mathbb{Z}} \mathbb{Z}\cdot Y \cong \mathbb{Z}\cdot (X \times Y)$ ✓。
又 $\mathbb{Z}\cdot Y$ 是**自由**的：$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot Y, -) = \Gamma(Y, -)$，于是
$$\operatorname{Ext}^{n}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot Y,\ N\bigr) = R^{n}\Gamma(Y, -)(N) = H^{n}(Y, N) ✓$$
取 $Y = X \times S$ 即得结论 ✓。∎

> 续见 notes/cor.ext-cond-set-section.2.md
