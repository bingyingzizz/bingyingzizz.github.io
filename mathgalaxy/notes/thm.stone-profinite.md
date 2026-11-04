# Stone ⟺ 投射有限　`thm.stone-profinite`　·　说明
根 `../`

⭐ 这条把**拓扑条件**翻译成**余极限条件**：Stone 空间恰好是「有限离散空间的（滤过）余极限」，也就是**投射有限集**（profinite set）所带的紧拓扑。
📌 于是 Stone 空间的构造可以先在有限集上验、再取极限 —— 这一招在 `topo.stone` 这一团里反复用。
⚠ 别把「投射有限」读成「投射对象 + 有限」：这里说的是 $\varprojlim$ 有限集，与 `thm.gleason` 里「$\mathbf{CHaus}$ 的投射对象」完全是两码事（那是极不连通）。
