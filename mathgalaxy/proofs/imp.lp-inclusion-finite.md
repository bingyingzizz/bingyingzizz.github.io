# imp.lp-inclusion-finite
`imp.lp-inclusion-finite` · 推出 · strong 边 · 根 `../`

`def.lp-norm` L^p 范数 + `def.measure-space` 有限 / σ-有限 / 半有限 + `thm.holder` Hölder 不等式 → `prop.lp-inclusion-finite` 有限测度时方向反过来

证明：$q = \infty$ 时，



$$\|f\|_p^p = \int |f|^p \le \|f\|_\infty^p \int 1 = \|f\|_\infty^p \, \mu(X)$$

一般 $q < \infty$ 时，把 $|f|^p$ 看作 $|f|^p \cdot 1$，对它用 Hölder，指数取 $q/p$ 与 $q/(q-p)$：



$$\|f\|_p^p = \int |f|^p \cdot 1 \le \big\| |f|^p \big\|_{q/p} \, \|1\|_{q/(q-p)} = \|f\|_q^p \, \mu(X)^{(q-p)/q}$$

两边开 $p$ 次方即得。∎
