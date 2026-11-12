# 松弛层　`def.flabby-sheaf`　·　说明
根 `../`

**与软层的区别**：松弛层要求对**开集**可延拓；软层要求对**闭集**可延拓。两者一般互不包含，但在仿紧 Hausdorff 空间上松弛层是软层（这是定理，本节点不证）。

**为什么重要**：松弛层无高阶上同调（Godement）—— **本图未证**，请与 `thm.soft-sheaf-acyclic` 的骨架状态一并读；所以松弛消解可以计算层上同调；Godement 消解的每一项正是松弛层（见 `def.godement-resolution`）。

**例子**：Godement 消解中的 $\mathcal{C}^{q}(\mathcal{F})$；不连续截面层 $U\mapsto\prod_{x\in U}\mathcal{F}_{x}$。常值层一般不是松弛层。

⚠ 松弛层与内射层不同：内射层一定松弛，反之不然。
