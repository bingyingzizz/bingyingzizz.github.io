# imp.compact-hausdorff-normal
`imp.compact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 + `def.hausdorff` Hausdorff 空间 → `thm.compact-hausdorff-normal` 紧 Hausdorff 空间正规

则 $U$ 开、$V$ 开（有限交）、$A \subseteq U$、$B \subseteq V$，且 $U \cap V = \emptyset$（每个 $O_{x_{i}}$ 都与 $W_{x_{i}}$ 不交，故 $U$ 与全体 $W_{x_{j}}$ 的交不交）。于是 $X$ 正规 ✓。∎

**⭐ 两次都是同一个模板**：对每个点造「一点余量」（邻域取到闭包仍避开对面），再用紧性把无穷族压成有限族 —— 有限性正是为了取「有限并 / 有限交」时开闭性不乱。这两步在 `thm.paracompact-hausdorff-normal` 里换成了局部有限族，是同一条思路的仿紧版。
