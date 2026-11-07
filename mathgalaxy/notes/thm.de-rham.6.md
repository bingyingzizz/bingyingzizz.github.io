# de Rham 定理　`thm.de-rham`　·　说明
根 `../`

**🔻 依赖与时序（本轮复核；节点保留 skeleton）。** 上面六步里，第 0–1 步（光滑奇异链、配对良定义）与第 2 步的「逐点正合」可独立验证；但第 2 步的「细层无环」是 Godement 定理，本图只有 `def.acyclic-sheaf` 的抽象定义，没有细层/软层节点。第 3 步要先有**好覆盖**（每个有限交可缩，例如测地凸邻域），本图没有这个节点；两条谱序列之间还要一步比较。第 4 步引用的 `thm.paracompact-cech-equals-sheaf` **本身仍是 skeleton**，所以即便补完 B–D，这一步也只能作为条件性输入。第 5 步的 Eilenberg–Steenrod 唯一性本图无节点。第 6 步的 Stokes 兼容性依赖 `thm.stokes-chain`（已证），但要逐项核对自然性。因此缺口 A–G 不是一句「标准」能带过的，尤其 E 是链式依赖；本节点不能删 skeleton。
