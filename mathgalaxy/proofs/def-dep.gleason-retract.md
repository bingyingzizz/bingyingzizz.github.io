# Gleason 定理把「投射」翻译成「收缩核」
`def-dep.gleason-retract` · 推出 · strong 边 · 根 `../`

`thm.gleason` Gleason 定理 → `cor.stonean-retract` Stonean 是收缩核

推论断言：Stonean 空间 $A$ 在 $\mathbf{CHaus}$ 中投射 $\iff$ $A$ 是某个紧 Hausdorff 空间的收缩核。$(\implies)$ 取自由紧 Hausdorff 空间 $F$ 与满射 $p:F\twoheadrightarrow A$，投射性把 $\operatorname{id}_{A}$ 沿 $p$ 抬起得截面 $s$，$A$ 即 $F$ 的收缩核。$(\Leftarrow)$ 若 $A$ 是 $p:F\twoheadrightarrow A$ 的收缩核，则对任意满射 $E\twoheadrightarrow B$ 与 $A\to B$，先沿 $F$ 的自由性把复合抬到 $E$，再与收缩映射复合。两个方向都把「投射」与「收缩核」互换，而这一步的资格由 `thm.gleason` 提供：Stonean 对象恰是投射对象。∎

> 推论把 Gleason 定理翻译成「Stonean = **收缩核**」。
