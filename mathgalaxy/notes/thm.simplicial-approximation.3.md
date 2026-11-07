# 单纯逼近　`thm.simplicial-approximation`　·　说明
根 `../`

反复重心重分使直径趋于零：若 $\dim K = n$，则 $\operatorname{mesh}(K^{(m)}) \le \big(\tfrac{n}{n+1}\big)^{m}\,\operatorname{mesh}(K)$（每个重分后的单纯形含于原某个单纯形，且直径不超过原直径的 $n/(n+1)$ 倍）。取 $m$ 使 $\operatorname{mesh}(K^{(m)}) < \delta/2$。

对 $K^{(m)}$ 的每个顶点 $v$，$\operatorname{st}(v)$ 的直径 $\le 2\,\operatorname{mesh}(K^{(m)}) < \delta$，故 $f(\operatorname{st}(v)) \subseteq \operatorname{st}_{L}(w)$ 对某个 $w$ 成立；令 $g(v) := w$。由引理 1，$g$ 是单纯映射且 $|g| \simeq f$。∎

**推论的证明（链级）**：记 $\iota_{m} : C_{*}(K^{(m)}) \hookrightarrow S_{*}(|K|)$、$\iota : C_{*}(K) \hookrightarrow S_{*}(|K|)$ 为包含。对恒等映射 $\operatorname{id} : |K| \to |K|$ 用定理，得 $m$ 与单纯映射 $g : K^{(m)} \to K$ 使 $|g| \simeq \operatorname{id}$。

- $\iota\,g_{*} = (|g|)_{*}\,\iota_{m}$（$g$ 是单纯映射，两边都在单个单纯形上取同一个像）；

> 续见 notes/thm.simplicial-approximation.4.md
