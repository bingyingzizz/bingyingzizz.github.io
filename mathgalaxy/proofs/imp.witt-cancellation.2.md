# 延拓后固定 $W$，再用正交补的唯一性消去
`imp.witt-cancellation` · 推出 · strong 边 · 根 `../`

`def.bilinear-form` 双线性型 + `def.orthogonal-complement` 正交补 + `lem.witt-extension` Witt 延拓引理 → `thm.witt-cancellation` Witt 消去定理

**收尾。** $g(U)=g(W^{\perp}\cap V_1)=g(W)^{\perp}\cap g(V_1)=W^{\perp}\cap V_2=U'$，所以 $U\cong U'$。$\blacksquare$

**唯一分解的推论。** 存在性对 $\dim V$ 归纳：若有迷向 $v\ne0$，因 $\beta$ 非退化可取 $w$ 使 $\beta(v,w)=1$，则 $H=\operatorname{span}(v,w)$ 是非退化双曲平面且 $V=H\perp H^{\perp}$，对 $H^{\perp}$ 归纳；若没有迷向向量，$V$ 自己就是非迷向块。唯一性：设 $V=H_1\perp\cdots\perp H_r\perp A=H_1'\perp\cdots\perp H_s'\perp A'$（$H_i,H_j'$ 双曲平面，$A,A'$ 非迷向），对 $r+s$ 归纳，用本定理消去 $H_1$ 与某个双曲块；双曲平面含迷向向量而非迷向块不含，故只能与双曲块同构，最后 $A\cong A'$。
