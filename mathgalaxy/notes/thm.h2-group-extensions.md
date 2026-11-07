# 二维上同调分类群扩张　`thm.h2-group-extensions`　·　说明
根 `../`

⭐ **一句话**：$H^{2}(G, A)$ 就是「$A$ 与 $G$ 拼成一个群」的所有拼法，模掉同构。

**为什么偏偏是 $2$ 次**：拼接的约束是**三元**的结合律，而三元条件正好是一个 $2$-上链的 $\delta = 0$；换截面带来的「错位」是**二元**的，正好是一个 $1$-上链的 $\delta$。

所以**障碍**落在 $H^{2}$、**可调整性**落在 $H^{1}$。

高次上同调对应的是更高阶的结合性障碍（$A_{\infty}$ 结构那一套），这里不需要。

**与 $\operatorname{Ext}$ 的关系**：当 $G$ 在 $A$ 上**作用平凡**时，$H^{2}(G, A) \cong \operatorname{Ext}^{1}_{\mathbb{Z}}(G^{\mathrm{ab}}, A) \oplus \operatorname{Hom}(H_{2}(G), A)$ —— **不是**只有 $\operatorname{Ext}^{1}$：$G = \mathbb{Z}^{2}$、$A = \mathbb{Z}$ 时 $\operatorname{Ext}^{1}(\mathbb{Z}^{2}, \mathbb{Z}) = 0$，但 Heisenberg 扩张 $1 \to \mathbb{Z} \to H \to \mathbb{Z}^{2} \to 1$ 不分裂、对应 $H^{2} \cong \mathbb{Z} \ne 0$；只有 $H_{2}(G) = 0$（如自由群）时才退化为 $\operatorname{Ext}^{1}$；

> 续见 notes/thm.h2-group-extensions.2.md
