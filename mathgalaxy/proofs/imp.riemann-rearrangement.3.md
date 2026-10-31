# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

于 $a_n \to 0$，越界的幅度随步骤趋于零（可以先用 $a_n \to 0$ 挑选出「每个正项、负项的绝对值都 $< \varepsilon$」的尾部来开工）。于是构造出的部分和与 $s$ 的距离趋于零。
4. 若想收敛到 $+\infty$：只加正项（每次都加到超过当前高度再加一点）；想不收敛：把正负两堆交替使用但间隔越拉越大。∎

> 第 1 步是全部的关键：**条件收敛 = 正部与负部各自发散、但两者之差收敛**。这条证明也是「$a_n \to 0$ 是必要条件」最有价值的一次使用。
