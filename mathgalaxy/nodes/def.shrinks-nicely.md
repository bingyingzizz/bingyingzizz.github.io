# 可缩族　`def.shrinks-nicely`
可缩地趋于 x（Shrinks Nicely）
layer 14 · 定义 · 微分定理 · 分析学

$\mathbb{R}^n$ 的一族 Borel 子集 $\{E_r\}_{r > 0}$ 叫**可缩地趋于 $x$**，当且仅当

$\cdot$ $E_r \subseteq B(r, x)$ 对每个 $r$ 成立；
$\cdot$ 存在 $\alpha > 0$，使 $m(E_r) > \alpha\cdot m(B(r, x))$ 对一切 $r$ 成立。

## 为什么成立（入边，证明在 proofs/）
- `def.borel` Borel σ-代数：用到了定义 Borel σ-代数　proofs/def-dep.borel-shrinks-nicely.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-shrinks-nicely.md
- `def.metric-space` 距离空间：用到了定义 距离空间　proofs/def-dep.metric-shrinks-nicely.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-shrinks-nicely.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.differentiation-general` 可缩族的微分定理
- 被 `thm.differentiation-general` 可缩族的微分定理 用

refs: Folland, Real Analysis, §3.4

> 说明见 `notes/def.shrinks-nicely.md`
