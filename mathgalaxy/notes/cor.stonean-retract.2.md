# Stonean 是收缩核　`cor.stonean-retract`　·　说明
根 `../`

**证明（把 Gleason 与「$\mathbf{CHaus}$ 里每个对象都是自由的商」拼起来）。**
- **$(\implies)$**：设 $A$ 是 Stonean。取自由紧 Hausdorff 空间 $F$ 与满射 $p : F\twoheadrightarrow A$（「$\mathbf{CHaus}$ 里每个对象都是自由的商」）。Stonean $\implies$ 由 **Gleason 定理** $A$ 是 $\mathbf{CHaus}$ 里的**投射对象**，于是满射 $p : F\to A$ 有**截面** $s : A\to F$，即 $p\circ s = \mathrm{id}_{A}$ —— 这正是「$A$ 是 $F$ 的收缩核」（取 $r := p$）✓。
- **$(\Longleftarrow)$**：若 $A$ 是自由对象 $F$ 的收缩核（$r: F\to A$，$r|_A = \mathrm{id}$），则由**投射对象的收缩核仍投射**（标准事实：投射对象的直和项/收缩核还是投射的），$A$ 在 $\mathbf{CHaus}$ 里投射；再由 Gleason 定理，$A$ 是 Stonean ✓。∎
⭐ 这条是「Stonean = 自由紧 Hausdorff 的收缩核」的完整论证，也是后面「$\mathbb{Z}[S]$ 投射」的来源（$S$ 的收缩核给出截面，截面给出 $\mathbb{Z}[S]$ 的投射性）。
