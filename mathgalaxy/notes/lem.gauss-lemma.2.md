# Gauss 引理　`lem.gauss-lemma`　·　说明
根 `../`

**第二步：右侧是常数**。$\partial_{t}f(t,s) = (\mathrm{d}\exp_{p})_{t(v+sw)}(v+sw)$，故 $\lVert \partial_{t}\rVert = \lVert v + sw\rVert = \sqrt{\lVert v\rVert^{2} + 2s\langle v,w\rangle + s^{2}\lVert w\rVert^{2}}$ 与 $t$ 无关；于是在 $s = 0$ 处 $\partial_{s}\lVert \partial_{t}\rVert^{2} = 2\langle v,w\rangle$，对一切 $t$ 相同。

**第三步：积分**。$E(0) = \langle v, \partial_{s}f(0,0)\rangle = 0$，因为 $f(0,s) = \exp_{p}(0) = p$ 不随 $s$ 变。于是 

$$E(1) = E(0) + \int_{0}^{1} \langle v, w\rangle\,dt = \langle v, w\rangle .$$

 而 $\partial_{t}f(1,0) = (\mathrm{d}\exp_{p})_{v}(v)$、$\partial_{s}f(1,0) = (\mathrm{d}\exp_{p})_{v}(w)$，故 $E(1) = \langle (\mathrm{d}\exp_{p})_{v}(v), (\mathrm{d}\exp_{p})_{v}(w)\rangle$，即所求。∎

> 续见 notes/lem.gauss-lemma.3.md
