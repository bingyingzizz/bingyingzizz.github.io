# imp.linf-properties
`imp.linf-properties` · 推出 · strong 边 · 根 `../`

`def.essential-sup` 本性上界与 L^∞ + `def.integrable` 可积 / L¹ + `def.simple-function` 简单函数 + `def.uniform-convergence` 一致收敛 → `thm.linf-properties` L^∞ 的性质

同理 $\|fg\|_{1} \le \|g\|_{1}\|f\|_{\infty}$ ✓。
  等号 $\|fg\|_{1} = \|f\|_{1}\|g\|_{\infty}$ 成立 $\iff$ $|g| = \|g\|_{\infty}$ 在 $\{f \ne 0\}$ 上 a.e. —— 否则 $\{f\ne0\}\cap\{|g|<\|g\|_{\infty}\}$ 正测度（在 $\sigma$ 有限下可取有限测度的子块），那里的严格不等式让整体不等式严格 ✓。
**(b)** $\|\cdot\|_{\infty}$ 是范数：非负性与齐次显然；$\|f\|_{\infty} = 0 \iff f = 0$ a.e. ✓；三角不等式由逐点 $|f+g| \le |f|+|g|$ 取**本质上确界**得到：设 $N$ 是使 $|f| \le \|f\|_{\infty}$、$|g| \le \|g\|_{\infty}$ 同时成立的补集，则在 $N^{c}$ 上 $|f+g| \le \|f\|_{\infty}+\|g\|_{\infty}$，故 $\|f+g\|_{\infty} \le \|f\|_{\infty}+

> 续见 proofs/imp.linf-properties.3.md
