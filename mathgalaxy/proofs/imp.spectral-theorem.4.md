# 自伴性 + 紧性 $\implies$ 谱定理（实对称）
`imp.spectral-theorem` · 推出 · strong 边 · 根 `../`

`def.normal-operator` 正规算子 + `thm.diagonalizable` 可对角化判据 + `thm.evt` 最值定理 + `def.orthogonal-complement` 正交补 → `thm.spectral-theorem` 谱定理（实对称）

在每个 $E_{\lambda_i}$ 里取标准正交基（Gram–Schmidt），拼起来就是 $V$ 的标准正交基，$T$ 在其中是对角阵。∎

> 第 1 步是**分析输入**（紧集上连续函数取最值），第 2 步是**自伴性唯一**被用到的地方。这也解释了为什么谱定理在实情形必须要求对称：没有自伴性，$U^{\perp}$ 不必不变，归纳断掉。
