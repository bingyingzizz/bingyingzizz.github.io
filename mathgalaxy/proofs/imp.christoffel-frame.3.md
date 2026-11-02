# imp.christoffel-frame
`imp.christoffel-frame` · 推出 · strong 边 · 根 `../`

`def.christoffel-symbol` 克里斯托费尔记号 → `prop.christoffel-frame` 标架下的联络系数

- $\partial_{v}\langle \partial_{v},\partial_{u}\rangle = 0$ 给出 $\langle \nabla_{\partial_{v}}\partial_{v},\partial_{u}\rangle = -\frac{1}{2}\partial_{u}\langle \partial_{v},\partial_{v}\rangle = -\frac{G_{u}}{2}$。
把 $X$ 按 $\mathrm{d}u,\mathrm{d}v$ 展开即得
$$\omega^{1}_{2} = \frac{1}{\sqrt{EG}}\left(\frac{E_{v}}{2}\,\mathrm{d}u-\frac{G_{u}}{2}\,\mathrm{d}v\right),$$
再代入 $\omega^{1} = \sqrt E\,\mathrm{d}u$、$\omega^{2} = \sqrt G\,\mathrm{d}v$，得
$$\omega^{1}_{2} = \frac{(\ln E)_{v}}{2\sqrt G}\,\omega^{1}-\frac{(\ln G)_{u}}{2\sqrt E}\,\omega^{2}. \quad\blacksquare$$
**与 $\Gamma$ 的对照**：若坐标标架本身就单位正交（$E = G = 1$，$F = 0$，即度量

> 续见 proofs/imp.christoffel-frame.4.md
