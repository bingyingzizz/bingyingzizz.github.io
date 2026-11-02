# 投射对象 $\iff$ Stonean 空间
`imp.gleason` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.stone-space` 全不连通与 Stone 空间 + `def.chaus` 紧 Hausdorff 空间范畴 → `thm.gleason` Gleason 定理

所以 $U$ 闭开，$S$ 极端不连通。

∎

**（Stonean $\Longrightarrow$ 投射）** 因为 $\mathbf{CHaus}$ 有纤维积、满态射在这里是「universal」的，投射性等价于「每个满态射都有截面」。所以只要证：$S$ Stonean 时每个满态射 $f : T \to S$ 都有截面。

由「满射有极小闭子集」那条引理，可以设 $f$ 在**极小**意义下满：即没有真闭子集 $T' \subset T$ 使 $f|_{T'}$ 满。我们来证这样的 $f$ 是单射。

反设 $x \ne x' \in T$ 且 $f(x) = f(x')$。

取不交邻域 $U \ni x$、$U' \ni x'$。

> 续见 proofs/imp.gleason.3.md
