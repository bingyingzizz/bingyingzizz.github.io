# 正则性 $\implies$ 弧长参数化存在且单位速
`imp.tu-arclength` · 推出 · strong 边 · 根 `../`

`def.regular-curve` 正则曲线 → `def.arc-length` 弧长

设 $\gamma : [a,b]\to\mathbb{R}^{3}$ 正则且 $C^{1}$，$s(t) := \int_{a}^{t}\lVert\gamma'(u)\rVert\,\mathrm{d}u$。被积函数连续且处处 $>0$，故 $s$ 严格递增、$C^{1}$，且

$$s'(t) = \lVert\gamma'(t)\rVert > 0 .$$

于是 $s$ 有 $C^{1}$ 的反函数 $h := s^{-1} : [0,L]\to[a,b]$，满足 $h'(s) = 1/\lVert\gamma'(h(s))\rVert$。令 $\tilde\gamma := \gamma\circ h$，则

$$\tilde\gamma'(s) = \gamma'(h(s))\,h'(s),\qquad \lVert\tilde\gamma'(s)\rVert = \lVert\gamma'(h(s))\rVert\cdot\frac{1}{\lVert\gamma'(h(s))\rVert} = 1 ,$$

所以 $\tilde\gamma$ 是弧长参数化。**长度不变**：换元 $t = h(s)$ 给出 $\int_{a}^{b}\lVert\gamma'(t)\rVert\,\mathrm{d}t = \int_{0}^{L}\lVert\tilde\gamma'(s)\rVert\,\mathrm{d}s = L$。∎

> 续见 proofs/imp.tu-arclength.2.md
