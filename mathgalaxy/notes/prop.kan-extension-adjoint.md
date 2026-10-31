# Kan 延拓与伴随的存在性　`prop.kan-extension-adjoint`　·　说明
根 `../`

**证明。** 两边逐字对照即可。
「$p^{-1}$ 有左伴随 $p_{!}$」说的是：对每个 $F \in \operatorname{Hom}(\mathcal{C}, \mathcal{D})$ 存在 $p_{!}F \in \operatorname{Hom}(\mathcal{C}', \mathcal{D})$ 与自然同构
$$\operatorname{Hom}\bigl(p_{!}F,\ G\bigr) \;\cong\; \operatorname{Hom}\bigl(F,\ p^{-1}G\bigr) = \operatorname{Hom}\bigl(F,\ G \circ p\bigr).$$
右边的数据正是「$F$ 沿 $p$ 的左 Kan 延拓」的定义（泛性质）✓：伴随的**单位** $\eta_{F} : F \implies p_{!}F \circ p$ 就是定义里的那条 $\alpha$，而同构本身给出 $\alpha$ 的泛性质 ✓。
所以「每个 $F$ 都有左 Kan 延拓」与「$p^{-1}$ 有左伴随」是同一句话；对偶地把箭头反过来即得右 Kan 延拓那一条 ✓。∎

⭐ 读法：**Kan 延拓不是新东西，它就是预复合函子的伴随**。这一条把「到处都要用 Kan 延拓」与「到处都要用伴随」两套话合成了一套。

> 续见 notes/prop.kan-extension-adjoint.2.md
