# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

故 $\sum p_n = \sum q_n = +\infty$。
2. **构造重排**：给定实数 $s$，先把正项按原顺序取出、逐项加到部分和上，直到部分和 $> s$ 为止（可以做到，因为正项之和发散）；再把负项逐项取来，直到部分和 $< s$（同样可以做到）。如此反复。
3. **收敛到 $s$**：每次「越界」的那一步所加的项，其绝对值不超过「跨过 $s$ 之前与 $s$ 的距离」，而由于 $a_n \to 0$，越界的幅度随步骤趋于零（可以先用 $a_n \to 0$ 挑选出「每个正项、负项的绝对值都 $< \varepsilon$」的尾部来开工）。于是构造出的部分和与 $s$ 的距离趋于零。
4. 若想收敛到 $+\inf

> 续见 proofs/imp.riemann-rearrangement.3.md
