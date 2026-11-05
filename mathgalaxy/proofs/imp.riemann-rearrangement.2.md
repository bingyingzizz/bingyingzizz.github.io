# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

为什么这是**重排**（而不是子列）：第 1 步说正项、负项之和都发散，故每次「停」只消耗有限多项；两个池子各有无穷多项待用，于是归纳地看**每个下标迟早被取到、且只取一次**，得到 $\sigma$ 使输出序列是 $a_{\sigma(1)},a_{\sigma(2)},\ldots$。⚠️ 这一步不能省：只说「逐项加起来」而不交代「未用项按最早优先」，就还没证明它是重排。
3. **收敛到 $s$**：由 $a_n \to 0$，给定 $\varepsilon > 0$ 取 $N$ 使 $n > N$ 时 $\lvert a_n\rvert < \varepsilon$。构造用到的下标迟早都超过 $N$，此后**每一步**都把部分和挪动不到 $\varepsilon$；而构造保证

> 续见 proofs/imp.riemann-rearrangement.3.md
