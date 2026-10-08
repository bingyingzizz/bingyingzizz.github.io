# 投射对象 $\iff$ Stonean 空间
`imp.gleason` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.stone-space` 全不连通与 Stone 空间 + `def.chaus` 紧 Hausdorff 空间范畴 → `thm.gleason` Gleason 定理

于是 $s(U) \subseteq U$ 且 $p(s(U)) = U$；又 $p(F) \cap U = \emptyset$ 迫使 $s(U) \subseteq U$。开集在连续映射下的原像开：$U = s^{-1}(U)$ 是开的；再由 $s^{-1}(F) = U^{c}$ 也开可得 $U$ 闭。所以 $U$ 闭开，$S$ 极端不连通。∎

**（Stonean $\Longrightarrow$ 投射）** 因为 $\mathbf{CHaus}$ 有纤维积、满态射在这里是「universal」的，投射性等价于「每个满态射都有截面」。所以只要证：$S$ Stonean 时每个满态射 $f : T \to S$ 都有截面。

> 续见 proofs/imp.gleason.3.md
