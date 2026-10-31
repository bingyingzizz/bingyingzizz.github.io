# 唯一分解 + 极小多项式 $\implies$ 根子空间分解
`imp.primary-decomposition` · 推出 · strong 边 · 根 `../`

`thm.poly-ufd` K[x] 是唯一分解整环 + `def.minimal-poly` 极小多项式 + `prop.root-bound` 根的个数不超过次数 → `thm.primary-decomposition` 根子空间分解

m V_i = m_i$。
5. **$E_{\lambda_i} \subseteq V_i$**：$\ker(T - \lambda_i I) \subseteq \ker (T - \lambda_i I)^{m_i}$ 显然。∎

> 第 1 步（把 $V$ 变成 $K[x]$-模）是整条链的枢纽：一旦成为模，「按不可约因子拆」就自动由 **$K[x]$ 是唯一分解整环 + Bézout** 提供，不必再在向量空间里手搓。
