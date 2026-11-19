# imp.simple-approximation
`imp.simple-approximation` · 推出 · strong 边 · 根 `../`

`def.simple-function` 简单函数 + `def.pointwise-convergence` 逐点收敛 + `def.uniform-convergence` 一致收敛 + `def.measurable-function` 可测函数 → `thm.simple-approximation` 简单函数逼近

rphi_{n} \le \varphi_{n+1}$ ✓；
- **逐点收敛**：若 $f(x) < \infty$，取 $n > f(x)$ 后 $0 \le f(x)-\varphi_{n}(x) \le 2^{-n} \to 0$；若 $f(x) = +\infty$ 则 $\varphi_{n}(x) = n \to \infty$ ✓；
- **在有界集上一致**：$f \le M$ 时取 $n > M$，同样得 $|f-\varphi_{n}| \le 2^{-n}$，与 $x$ 无关 ✓。
**(b)** 一般可测 $f$：写成 $f = (f_{1}^{+} - f_{1}^{-}) + i(f_{2}^{+} - f_{2}^{-})$，对四个非负可测部分各用 (a) 得单调列，再把实部虚部、正部负部线性组合起来；由于每一步都满足 $|\varphi_{n}| \le |f|$、逐点收敛，结论成立 ✓。∎
