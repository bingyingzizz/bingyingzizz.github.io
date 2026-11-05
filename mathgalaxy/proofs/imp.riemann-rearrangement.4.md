# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

⚠️ 原文只说「越界那一步的幅度不超过跨过前与 $s$ 的距离」——那只是**一步**的估计；要得到的是「之后**每一步**都在 $s$ 的 $\varepsilon$-邻域里」，靠的是「位移 $< \varepsilon$」加上「不断来回跨」。
4. 若想收敛到 $+\infty$：第 $k$ 轮先把正项加到部分和 $> k$，再取**一项**负项；如此反复（仍按「最早未用项」取，故仍是重排）。每轮只加一个负项、其余都是抬高，故部分和 $\to +\infty$。

> 续见 proofs/imp.riemann-rearrangement.5.md
