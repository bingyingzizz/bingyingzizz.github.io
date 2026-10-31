# 换卡只乘 Jacobi 矩阵 $\implies$ 切映射良定义
`imp.mf-diff-well-defined` · 推出 · strong 边 · 根 `../`

`def.manifold-chart` 图卡 + `def.tangent-space-manifold` 切空间 → `def.differential-map` 切映射

**第三步：线性。** 取 $\gamma$ 使 $(\varphi \circ \gamma)^{\prime}(0) = v$，则 $(\varphi \circ \gamma_{a})^{\prime}(0) = av$（重参数化 $t \mapsto at$），于是 $\mathrm{d}F_{p}(a[\gamma]) = a\,\mathrm{d}F_{p}([\gamma])$；加法同理（用 $\mathbb{R}^{n}$ 卡里向量相加的曲线）。故 $\mathrm{d}F_{p}$ 是线性映射。∎

⭐ 两处「与卡无关」是同一段链式法则：切向量这边一次、切映射那边一次。光滑流形的全部线性代数都建立在这一段计算上。
