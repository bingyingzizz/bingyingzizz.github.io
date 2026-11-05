# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

若想让它**不收敛**：第 $k$ 轮把「在 $s$ 上方的停点」抬到 $s + k$、「在下方的停点」压到 $s - k$（幅度逐轮放大），仍按最早未用项取。于是部分和在 $s$ 两侧来回摆而摆幅不收，故发散（极限不存在，也不是 $\pm\infty$）。∎

> 第 1 步是全部的关键：**条件收敛 = 正部与负部各自发散、但两者之差收敛**。这条证明也是「$a_n \to 0$ 是必要条件」最有价值的一次使用。
