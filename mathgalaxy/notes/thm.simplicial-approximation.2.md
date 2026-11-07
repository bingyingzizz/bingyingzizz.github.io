# 单纯逼近　`thm.simplicial-approximation`　·　说明
根 `../`

(ii)：设 $x \in \sigma^{\circ}$。令 $\tau = g(\sigma)$，它是以 $g(v_{0}), \ldots, g(v_{p})$ 为顶点的单纯形。由 (i) 的论证，$f(x) \in \operatorname{st}_{L}(\tau)$，即 $f(x)$ 落在某个**包含 $\tau$ 的**单纯形 $\rho$ 的内部；而 $g(x) \in \tau \subseteq \rho$。$\rho$ 是凸的，所以线段 $[f(x), g(x)] \subseteq \rho \subseteq |L|$。令 $H(x, t) = (1 - t)\,g(x) + t\,f(x)$，它在每个 $\sigma^{\circ}$ 上连续、在边界上与相邻单纯形的公式一致（同一点 $x$ 无论从哪个单形取，$\rho$ 的取法给出同一个凸包），故 $H : |K| \times I \to |L|$ 连续，是 $g$ 到 $f$ 的同伦。∎

**引理 2（重分够细）**：$\{\operatorname{st}_{L}(w)\}_{w \in \operatorname{Vert}(L)}$ 是 $|L|$ 的开覆盖；由 $f$ 连续，$\{f^{-1}(\operatorname{st}_{L}(w))\}$ 是 $|K|$ 的开覆盖。$|K|$ 紧，取 Lebesgue 数 $\delta > 0$（`def.lebesgue-number`）：$|K|$ 中任何直径 $< \delta$ 的子集都落在某个 $f^{-1}(\operatorname{st}_{L}(w))$ 里，即其像落在某个 $\operatorname{st}_{L}(w)$ 里。

> 续见 notes/thm.simplicial-approximation.3.md
