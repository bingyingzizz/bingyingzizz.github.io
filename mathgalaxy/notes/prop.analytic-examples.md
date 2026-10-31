# 解析环的例子　`prop.analytic-examples`　·　说明
根 `../`

⭐ (i) 与 (ii) 其实有同一个证明：两种情形下都有

$$\mathcal{A}[S] = \mathbb{Z}_\blacksquare[S] \otimes^{L}_{\mathbb{Z}_\blacksquare} \mathcal{A},$$

而 $C$ 是 $D(\mathbf{Solid})$ 里的 $\mathcal{A}$-模，于是

$$\operatorname{RHom}(\mathbb{Z}_\blacksquare[S], C) \cong \operatorname{RHom}_{\mathcal{A}}(\mathbb{Z}_\blacksquare[S] \otimes^{L}_{\mathbb{Z}_\blacksquare} \mathcal{A},\ C),$$

左边是 $\operatorname{RHom}(\mathbb{Z}[S], C)$（$C$ 固态），右边是 $\operatorname{RHom}_{\mathcal{A}}(\mathcal{A}[S], C)$。

⚠ $A$ 必须**离散**：对一般凝聚态环这个论断不成立，这也是 `thm.za-analytic` 需要「有限生成 $\mathbb{Z}$-代数」的原因。
