# 内积的正定性 $\implies$ Cauchy–Schwarz
`imp.cauchy-schwarz` · 推出 · strong 边 · 根 `../`

`def.inner-product` 内积 + `def.induced-norm` 诱导范数与距离 → `thm.cauchy-schwarz` Cauchy–Schwarz 不等式

若 $v = 0$ 结论平凡。设 $v \ne 0$，对一切 $t \in K$ 有

$$0 \le \|u - t v\|^{2} = \|u\|^{2} - \bar{t}\langle u, v\rangle - t\,\overline{\langle u, v\rangle} + |t|^{2}\|v\|^{2}$$

取 $t := \dfrac{\langle v, u \rangle}{\|v\|^{2}}$（则 $\bar t = \overline{\langle v,u\rangle}/\|v\|^{2} = \langle u, v\rangle/\|v\|^{2}$），代入整理得

$$0 \le \|u\|^{2} - \frac{|\langle u, v\rangle|^{2}}{\|v\|^{2}} \quad\Longrightarrow\quad |\langle u, v\rangle|^{2} \le \|u\|^{2}\|v\|^{2}$$

开方即得结论。

**等号条件**：$\|u - tv\|^{2} = 0 \iff u = tv$，即线性相关。∎

> 续见 proofs/imp.cauchy-schwarz.2.md
