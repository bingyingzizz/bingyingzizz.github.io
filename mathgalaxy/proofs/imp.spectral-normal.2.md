# 实谱定理 + 复化 $\implies$ 复正规可酉对角化
`imp.spectral-normal` · 推出 · strong 边 · 根 `../`

`thm.spectral-theorem` 谱定理（实对称） + `def.normal-operator` 正规算子 → `cor.spectral-normal` 谱定理（复正规）

标准正交基拼起来即得。
4. 于是 $T$ 在同一组标准正交基下对角（对角元 $\lambda_j + i\mu_j$）。
5. **三条等价**：由对角形直接读出 —— $T^{\ast} = T \iff$ 所有对角元实；$T$ 酉 $\iff |\lambda|=1$；投影 $\iff$ 特征值 $\in\{0,1\}$ 且自伴。∎

> 第 2 步的「正规 $\iff$ $AB$ 交换」是这条推论的核心：**复正规算子 = 一对交换的自伴算子**，于是问题化归到实谱定理。
