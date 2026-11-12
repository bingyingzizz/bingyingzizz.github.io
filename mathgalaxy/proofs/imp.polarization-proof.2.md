# 极化恒等式：实/复两种情形
`imp.polarization-proof` · 推出 · strong 边 · 根 `../`

`def.inner-product` 内积 + `def.induced-norm` 诱导范数与距离 + `def.norm` 范数 → `thm.polarization` 极化恒等式

复情形：对 $k=0,1,2,3$，
$$\lVert x+i^{k}y\rVert^{2}=\lVert x\rVert^{2}+\lVert y\rVert^{2}+2\operatorname{Re}\bigl(\overline{i^{k}}\langle x,y\rangle\bigr).$$
记 $z=\langle x,y\rangle=a+bi$，逐项乘 $i^{k}$ 后相加：$i^{0}$ 项为 $2a$；$i^{1}$ 项为 $i\cdot2\operatorname{Re}(-iz)=2bi$；$i^{2}$ 项为 $-2\operatorname{Re}(-z)=2a$；$i^{3}$ 项为 $-i\cdot2\operatorname{Re}(iz)=2bi$。前两项 $\lVert x\rVert^{2}+\lVert y\rVert^{2}$ 乘 $\sum_k i^{k}=0$ 消失。合计 $4a+4bi=4z$，除以 $4$ 即得。∎

> 完整证明见本条边；节点注只保留动机与缺口。
