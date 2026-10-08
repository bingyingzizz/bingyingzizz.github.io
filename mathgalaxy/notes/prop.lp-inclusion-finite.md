# 有限测度时方向反过来　`prop.lp-inclusion-finite`　·　说明
根 `../`

证明：$q = \infty$ 时，



$$\|f\|_p^p = \int |f|^p \le \|f\|_\infty^p \int 1 = \|f\|_\infty^p \, \mu(X)$$

一般 $q < \infty$ 时，把 $|f|^p$ 看作 $|f|^p \cdot 1$，对它用 Hölder，指数取 $q/p$ 与 $q/(q-p)$：



$$\|f\|_p^p = \int |f|^p \cdot 1 \le \big\| |f|^p \big\|_{q/p} \, \|1\|_{q/(q-p)} = \|f\|_q^p \, \mu(X)^{(q-p)/q}$$

两边开 $p$ 次方即得。∎

⭐ **与 $\ell^p$ 的方向正好相反**（那里是 $p$ 越大空间越小，这里是越小越大）。

记忆口诀：



- **测度有限** $\to$ 只有「爆破」要防 $\to$ 指数**越小**空间**越大**：$L^1 \supseteq L^2 \supseteq \cdots \supseteq L^\infty$；

- **计数测度** $\to$ 只有「衰减」要防 $\to$ 指数**越大**空间**越小**：$\ell^1 \subseteq \ell^2 \subseteq \cdots \subseteq \ell^\infty$。
