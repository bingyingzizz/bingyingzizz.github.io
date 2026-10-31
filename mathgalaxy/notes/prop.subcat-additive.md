# 子范畴继承加法与阿贝尔性　`prop.subcat-additive`　·　说明
根 `../`

**证明。**
**（一）双积。** 伴随（不论左右）都加法：右伴随保积、左伴随保余积 ✓（见「伴随函子都加法」）。于是 $\mathcal{D}$ 里 $F(X) \oplus F(Y)$ 是双积，而 $F$ 全忠实把它「如实」搬回 $\mathcal{C}$：由米田引理，$\operatorname{Hom}_{\mathcal{C}}(Z, \cdot)$ 上的两条等式与 $\mathcal{D}$ 里的完全一致 ✓。
**（二）阿贝尔性。** 有了双积后核余核再由 $\mathcal{D}$ 里「每个态射都严格」（$\operatorname{coker}(\ker u) \cong \ker(\operatorname{coker} u)$）沿**正合**函子搬回来 ✓。∎

⭐ 读法：**「往里放」的全忠实函子只要还有伴随，子范畴就白拿加法结构** —— 这就是「$\mathbf{Ab}$ 的子范畴为什么自动加法」的答案。
