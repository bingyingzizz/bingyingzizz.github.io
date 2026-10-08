# 自然变换　`def.natural-transformation`　·　说明
根 `../`

一句话：$\alpha$ 的两个分量各管一头，交换性说的就是「先换函子再走 $f$」与「先走 $f$ 再换函子」结果一样。

有了自然变换，**函子本身也成了对象**：以 $\mathcal{C} \to \mathcal{C}'$ 的函子为对象、以自然变换为态射，得到一个范畴，记 $\operatorname{Hom}(\mathcal{C}, \mathcal{C}')$；所有 $F \implies G$ 的自然变换组成的集合记 $\operatorname{Nat}(F, G)$。

例：$\mathbf{CRng} \to \mathbf{Grp}$ 上有两个函子 —— $A \mapsto GL_n(A)$ 与 $A \mapsto A^{*}$。行列式



$$\det_A : GL_n(A) \to A^{*}$$



拼起来正是一个**自然变换**：$\det$ 与环同态「交换次序」。这正是「自然」二字的意思 —— 不是逐例验证出来的巧合，而是结构使然。
