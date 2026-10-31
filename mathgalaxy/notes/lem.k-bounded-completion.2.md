# K-有界正合在完备化下不变　`lem.k-bounded-completion`　·　说明
根 `../`

**证明（两个方向各算一次 $\varepsilon/2$）。** 先商掉 $M_{0}$（$K$-有界正合在商掉范数为零的元素下不变），于是可设 $M^{\bullet} \subseteq \widehat{M}^{\bullet}$ 是稠密保范嵌入。
- **$\implies$**：给 $s \in \widehat{M}^{n}$ 与 $\varepsilon>0$。由稠密性取 $t \in M^{n}$ 使 $\|s - t\| \le \frac{\varepsilon}{2(1+K\|d^{n}\|)}$；由 $M^{\bullet}$ 的 $K$-有界性取 $s' \in M^{n+1}$ 使 $\|t - ds'\| \le K\|dt\| + \frac{\varepsilon}{2}$。于是
$$\|s - ds'\| \le \|s-t\| + K\|dt\| + \frac{\varepsilon}{2} = K\|ds\| + \Bigl(\|s-t\| + K\|ds - dt\| + \frac{\varepsilon}{2}\Bigr) \le K\|ds\| + \varepsilon .$$
- **$\Longleftarrow$**：给 $s \in M^{n} \subseteq \widehat{M}^{n}$。由 $\widehat{M}^{\bullet}$ 的 $K$-有界性取 $t' \in \widehat{M}^{n+1}$ 使 $\|s - dt'\| \le K\|ds\| + \frac{\varepsilon}{2}$；再由稠密性取 $s' \in M^{n+1}$ 使 $\|s' - t'\| \le \frac{\varepsilon}{2(1+\|d^{n+1}\|

> 续见 notes/lem.k-bounded-completion.3.md
