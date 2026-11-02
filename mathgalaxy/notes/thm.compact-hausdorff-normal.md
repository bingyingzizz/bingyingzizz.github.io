# 紧 Hausdorff 空间正规　`thm.compact-hausdorff-normal`　·　说明
根 `../`

⭐ **证明思路（两步，都是紧性的标准用法）**：先把「点 vs 闭集」做出来（对每点 $b \in B$ 用 $T_{2}$ 造 $b$ 的开邻域，其闭包仍避开 $x$；再用紧性取有限多个的并），得到「点与闭集可分开」（即 $X$ 正则）；再对 $x \in A$ 重复一次同一手法（这次用 $A$ 的紧性取有限并），得到两个不交开集。两次都是「对每个点造一点余量、再用紧性取有限多」。完整证明在边上（`imp.compact-hausdorff-normal`）。

⚠️ **紧性与 Hausdorff 缺一不可**：只有紧性不行（不 $T_{2}$ 的紧空间可以完全不正规），只有 $T_{2}$ 也不行（$T_{2}$ 一般不给正规 —— 例如 Sorgenfrey 平面）。所以这条定理的字面里两个前提都不能删。

> 续见 notes/thm.compact-hausdorff-normal.2.md
