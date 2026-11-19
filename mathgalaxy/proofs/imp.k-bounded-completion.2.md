# imp.k-bounded-completion
`imp.k-bounded-completion` · 推出 · strong 边 · 根 `../`

`def.semi-normed-ab-group` 半范数阿贝尔群 + `def.complete` 完备 + `def.k-bounded-exact` K-有界正合 → `lem.k-bounded-completion` K-有界正合在完备化下不变

于是
$$\|s - ds'\| \le \|s-t\| + K\|dt\| + \frac{\varepsilon}{2} = K\|ds\| + \Bigl(\|s-t\| + K\|ds - dt\| + \frac{\varepsilon}{2}\Bigr) \le K\|ds\| + \varepsilon .$$
- **$\Longleftarrow$**：给 $s \in M^{n} \subseteq \widehat{M}^{n}$。

由 $\widehat{M}^{\bullet}$ 的 $K$-有界性取 $t' \in \widehat{M}^{n+1}$ 使 $\|s - dt'\| \le K\|ds\| + \frac{\varepsilon}{2}$；

再由稠密性取 $s' \in M^{n+1}$ 使 $\|s' - t'\| \le \frac{\varepsilon}{2(1+\|d^{n+1}\|)}$。

于是 $\|s - ds'\| \le K\|ds\| + \varepsilon$。

∎
