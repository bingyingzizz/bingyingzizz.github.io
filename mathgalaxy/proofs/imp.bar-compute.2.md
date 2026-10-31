# 标准消解 $\implies$ 显式上链复形算出群上同调
`imp.bar-compute` · 推出 · strong 边 · 根 `../`

`def.bar-resolution` 标准消解 + `def.group-cohomology` 群上同调 → `prop.group-cohom-compute` 用标准消解计算群上同调

为什么：$\operatorname{Hom}_{R[G]}(P_{\bullet}, M)$ 与「先取 $M$ 的内射消解再取 Hom」给出同一族右导出函子（两者都是 $\delta$-函子，且在 $n = 0$ 处都与 $\operatorname{Hom}_{R[G]}(R, M) = M^{G}$ 一致、都可擦除），由同调代数的唯一性比较即得。取 $P_{\bullet} = B_{\bullet}$ 即可。

> 续见 proofs/imp.bar-compute.3.md
