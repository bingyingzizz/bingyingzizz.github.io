# 预层态射的单满按点检验　`lem.presheaf-mono-pointwise`
预层是逐点算的
layer 14 · 引理 · 预层与米田 · 范畴论

预层态射 $\varphi : T \implies T'$ 在 $\widehat{\mathcal{C}}$ 中是单态射（满态射）$\iff$ 对每个 $X \in \mathcal{C}$，$\varphi_{X} : T(X) \to T'(X)$ 是单射（满射）。

## 为什么成立（入边，证明在 proofs/）
- `lem.yoneda` 米田引理：米田引理 $\implies$ 单态射逐点检验　proofs/imp.presheaf-mono.md
- `def.mono` 单态射 / 满态射：用到了定义 单态射 / 满态射　proofs/def-link.mono-presheaf-mono.md
- `def.presheaf` 预层：用到了定义 预层　proofs/def-link.presheaf-mono-pointwise.md
- `def.presheaf` 预层：用到了定义 预层　proofs/def-dep.presheaf-mono.md

- …另有入边，续页见 `nodes/lem.presheaf-mono-pointwise.2.md`

## 说明
一句话：**预层的性质按点检验**。$\widehat{\mathcal{C}}$ 里的一切都是逐点定义的，单满不例外。

（$\Longleftarrow$）方向是显然的：逐点单射的族当然左可消。（$\Longrightarrow$）方向要用米田引理，见边上那条推导。
